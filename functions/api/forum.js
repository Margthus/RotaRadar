const json = (payload, init = {}) =>
  new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init.headers || {}),
    },
  });

const FORUM_KV_KEY = "forum:topics:v2";

const demoForum = {
  izmir: [
    {
      id: "izmir-demo-2026-1",
      title: "Kordon sahilde akşam yürüyüşü",
      author: "Aslı",
      createdAt: 1778461800000,
      messages: [
        {
          id: "izmir-demo-m1",
          author: "Aslı",
          text: "20:00-22:00 arası sahil hattı aydınlık ve kalabalık, yürüyüş için uygun.",
          createdAt: 1778461800000,
        },
        {
          id: "izmir-demo-m2",
          author: "Deniz",
          text: "Ara sokak yerine ana caddede kalırsan daha konforlu oluyor.",
          createdAt: 1778465400000,
        },
      ],
    },
  ],
  ankara: [
    {
      id: "ankara-demo-2026-1",
      title: "AOC hafta sonu ulaşım notları",
      author: "Bora",
      createdAt: 1778470800000,
      messages: [
        {
          id: "ankara-demo-m1",
          author: "Bora",
          text: "Hafta sonu öğlen saati kalabalık oluyor, sabah gitmek daha rahat.",
          createdAt: 1778470800000,
        },
        {
          id: "ankara-demo-m2",
          author: "İpek",
          text: "Metrodan sonra kısa yürüyüşle ana girişe ulaşım kolay.",
          createdAt: 1778474400000,
        },
      ],
    },
  ],
  istanbul: [
    {
      id: "istanbul-demo-2026-1",
      title: "Sultanahmet erken saat planı",
      author: "Selin",
      createdAt: 1778481600000,
      messages: [
        {
          id: "istanbul-demo-m1",
          author: "Selin",
          text: "08:00-10:00 arası meydan daha sakin, fotoğraf çekmek için ideal.",
          createdAt: 1778481600000,
        },
        {
          id: "istanbul-demo-m2",
          author: "Kerem",
          text: "Tramvay çıkışından sonra ana güzergah üzerinden ilerlemek daha güvenli hissettiriyor.",
          createdAt: 1778485200000,
        },
      ],
    },
  ],
};

function cloneSeed() {
  return JSON.parse(JSON.stringify(demoForum));
}

function normalizeForumShape(value) {
  if (!value || typeof value !== "object") return cloneSeed();
  return {
    izmir: Array.isArray(value.izmir) ? value.izmir : [],
    ankara: Array.isArray(value.ankara) ? value.ankara : [],
    istanbul: Array.isArray(value.istanbul) ? value.istanbul : [],
  };
}

function getForumStore() {
  if (!globalThis.__rotaradarForumStore) {
    globalThis.__rotaradarForumStore = cloneSeed();
  }
  return globalThis.__rotaradarForumStore;
}

async function readForum(env) {
  if (env?.FORUM_KV) {
    const raw = await env.FORUM_KV.get(FORUM_KV_KEY, "json");
    if (!raw) {
      const seed = cloneSeed();
      await env.FORUM_KV.put(FORUM_KV_KEY, JSON.stringify(seed));
      return seed;
    }
    return normalizeForumShape(raw);
  }

  return normalizeForumShape(getForumStore());
}

async function writeForum(env, forum) {
  const normalized = normalizeForumShape(forum);
  if (env?.FORUM_KV) {
    await env.FORUM_KV.put(FORUM_KV_KEY, JSON.stringify(normalized));
    return;
  }
  globalThis.__rotaradarForumStore = normalized;
}

function sortTopics(topics) {
  return [...topics].sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
}

function cleanText(value, max = 240) {
  return String(value || "")
    .trim()
    .slice(0, max);
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city") || "istanbul";
  const forum = await readForum(env);

  return json(sortTopics(forum[city] || []));
}

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => ({}));
  const city = typeof body.city === "string" ? body.city : "istanbul";
  if (!["izmir", "ankara", "istanbul"].includes(city)) {
    return json({ error: "Invalid city" }, { status: 400 });
  }

  const forum = await readForum(env);
  const topics = Array.isArray(forum[city]) ? forum[city] : [];
  const now = Date.now();

  if (body.action === "reply") {
    const topicId = cleanText(body.topicId, 120);
    const author = cleanText(body.author, 60);
    const text = cleanText(body.text, 240);
    if (!topicId || !author || !text) {
      return json({ error: "Invalid reply payload" }, { status: 400 });
    }

    const topicIndex = topics.findIndex((topic) => topic.id === topicId);
    if (topicIndex < 0) {
      return json({ error: "Topic not found" }, { status: 404 });
    }

    const message = {
      id: `m-${now}`,
      author,
      text,
      createdAt: now,
    };

    const target = topics[topicIndex];
    const nextTopic = {
      ...target,
      messages: [...(Array.isArray(target.messages) ? target.messages : []), message].slice(-120),
    };
    topics[topicIndex] = nextTopic;
    forum[city] = sortTopics(topics);
    await writeForum(env, forum);

    return json({ topicId, message }, { status: 201 });
  }

  const title = cleanText(body.title, 120);
  const author = cleanText(body.author, 60);
  const text = cleanText(body.text, 240);
  if (!title || !author || !text) {
    return json({ error: "Invalid topic payload" }, { status: 400 });
  }

  const created = {
    id: `${city}-${now}`,
    title,
    author,
    createdAt: now,
    messages: [
      {
        id: `m-${now}`,
        author,
        text,
        createdAt: now,
      },
    ],
  };

  forum[city] = sortTopics([created, ...topics]).slice(0, 200);
  await writeForum(env, forum);

  return json(created, { status: 201 });
}
