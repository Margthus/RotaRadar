const json = (payload, init = {}) =>
  new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init.headers || {}),
    },
  });

const demoForum = {
  izmir: [
    {
      id: "izmir-1",
      title: "Kordon gece guvenligi",
      author: "Merve",
      createdAt: 1778271038031,
      messages: [
        {
          id: "m1",
          author: "Merve",
          text: "Kordon'da 21:00 sonrasi kalabalik nasildi?",
          createdAt: 1778271038031,
        },
        {
          id: "m2",
          author: "Ege",
          text: "Hafta ici genelde rahat, ara sokaklara tek girmemek daha iyi.",
          createdAt: 1778281838031,
        },
      ],
    },
  ],
  ankara: [
    {
      id: "ankara-1",
      title: "AOC hafta sonu rota onerisi",
      author: "Can",
      createdAt: 1778299838031,
      messages: [
        {
          id: "m1",
          author: "Can",
          text: "Ataturk Orman Ciftligi icin en rahat giris neresi?",
          createdAt: 1778299838031,
        },
      ],
    },
  ],
  istanbul: [
    {
      id: "istanbul-1",
      title: "Sultanahmet bolgesi kalabalik saatler",
      author: "Burak",
      createdAt: 1778317838031,
      messages: [
        {
          id: "m1",
          author: "Burak",
          text: "Sultanahmet'e en sakin saat ne zaman?",
          createdAt: 1778317838031,
        },
        {
          id: "m2",
          author: "Elif",
          text: "08:30-10:00 arasi daha rahat oluyor.",
          createdAt: 1778321438031,
        },
      ],
    },
  ],
};

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city") || "istanbul";

  return json(demoForum[city] || []);
}

export async function onRequestPost({ request }) {
  const body = await request.json().catch(() => ({}));
  const city = typeof body.city === "string" ? body.city : "istanbul";
  const now = Date.now();

  if (body.action === "reply") {
    if (!body.topicId || !body.author || !body.text) {
      return json({ error: "Invalid reply payload" }, { status: 400 });
    }

    return json(
      {
        topicId: body.topicId,
        message: {
          id: `m-${now}`,
          author: String(body.author).trim(),
          text: String(body.text).trim(),
          createdAt: now,
        },
      },
      { status: 201 },
    );
  }

  if (!body.title || !body.author || !body.text) {
    return json({ error: "Invalid topic payload" }, { status: 400 });
  }

  return json(
    {
      id: `${city}-${now}`,
      title: String(body.title).trim(),
      author: String(body.author).trim(),
      createdAt: now,
      messages: [
        {
          id: `m-${now}`,
          author: String(body.author).trim(),
          text: String(body.text).trim(),
          createdAt: now,
        },
      ],
    },
    { status: 201 },
  );
}
