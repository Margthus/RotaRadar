const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const { URL } = require("url");

const PORT = process.env.PORT || 5173;
const PUBLIC_DIR = __dirname;
const DATA_DIR = path.join(__dirname, "data");
const RATINGS_FILE = path.join(DATA_DIR, "ratings.json");
const FORUM_FILE = path.join(DATA_DIR, "forum.json");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

let writeQueue = Promise.resolve();

async function ensureRatingsFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(RATINGS_FILE);
  } catch {
    await fs.writeFile(RATINGS_FILE, "{}", "utf8");
  }
}

async function ensureForumFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(FORUM_FILE);
  } catch {
    const seeded = {
      izmir: [
        {
          id: "izmir-1",
          title: "Kordon gece guvenligi",
          author: "Merve",
          createdAt: Date.now() - 1000 * 60 * 60 * 18,
          messages: [
            { id: "m1", author: "Merve", text: "Kordon'da 21:00 sonrasi kalabalik nasildi?", createdAt: Date.now() - 1000 * 60 * 60 * 18 },
            { id: "m2", author: "Ege", text: "Hafta ici genelde rahat, ara sokaklara tek girmemek daha iyi.", createdAt: Date.now() - 1000 * 60 * 60 * 15 },
          ],
        },
      ],
      ankara: [
        {
          id: "ankara-1",
          title: "AOÇ hafta sonu rota onerisi",
          author: "Can",
          createdAt: Date.now() - 1000 * 60 * 60 * 10,
          messages: [
            { id: "m1", author: "Can", text: "Ataturk Orman Ciftligi icin en rahat giris neresi?", createdAt: Date.now() - 1000 * 60 * 60 * 10 },
            { id: "m2", author: "Sena", text: "Sabah erken gidersen trafik az oluyor, park ici yuruyus guzel.", createdAt: Date.now() - 1000 * 60 * 60 * 8 },
          ],
        },
      ],
      istanbul: [
        {
          id: "istanbul-1",
          title: "Sultanahmet bolgesi kalabalik saatler",
          author: "Burak",
          createdAt: Date.now() - 1000 * 60 * 60 * 5,
          messages: [
            { id: "m1", author: "Burak", text: "Sultanahmet'e en sakin saat ne zaman?", createdAt: Date.now() - 1000 * 60 * 60 * 5 },
            { id: "m2", author: "Elif", text: "08:30-10:00 arasi daha rahat oluyor.", createdAt: Date.now() - 1000 * 60 * 60 * 4 },
          ],
        },
      ],
    };
    await fs.writeFile(FORUM_FILE, JSON.stringify(seeded, null, 2), "utf8");
  }
}

async function readRatings() {
  await ensureRatingsFile();
  const raw = await fs.readFile(RATINGS_FILE, "utf8");
  return JSON.parse(raw || "{}");
}

async function writeRatings(ratings) {
  await ensureRatingsFile();
  await fs.writeFile(RATINGS_FILE, JSON.stringify(ratings, null, 2), "utf8");
}

async function readForum() {
  await ensureForumFile();
  const raw = await fs.readFile(FORUM_FILE, "utf8");
  return JSON.parse(raw || "{}");
}

async function writeForum(forum) {
  await ensureForumFile();
  await fs.writeFile(FORUM_FILE, JSON.stringify(forum, null, 2), "utf8");
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 100_000) {
        request.destroy();
        reject(new Error("Request body too large"));
      }
    });

    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function isSafeStaticPath(filePath) {
  const resolvedPath = path.resolve(filePath);
  return resolvedPath === PUBLIC_DIR || resolvedPath.startsWith(`${PUBLIC_DIR}${path.sep}`);
}

async function serveStatic(requestUrl, response) {
  const pathname = decodeURIComponent(requestUrl.pathname);
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.join(PUBLIC_DIR, requestedPath);

  if (!isSafeStaticPath(filePath) || requestedPath.startsWith("/data/")) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  try {
    const file = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=60",
    });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

async function handleRatings(requestUrl, response) {
  const city = requestUrl.searchParams.get("city");
  const ratings = await readRatings();
  sendJson(response, 200, city ? ratings[city] || {} : ratings);
}

async function handleRate(request, response) {
  const body = await readRequestBody(request);
  const { city, areaId, rating, comment } = JSON.parse(body || "{}");
  const numericRating = Number(rating);
  const commentText = typeof comment === "string" ? comment.trim() : "";

  if (
    typeof city !== "string" ||
    typeof areaId !== "string" ||
    !Number.isFinite(numericRating) ||
    numericRating < 1 ||
    numericRating > 5 ||
    !commentText ||
    commentText.length > 240
  ) {
    sendJson(response, 400, { error: "Invalid rating payload" });
    return;
  }

  const result = await (writeQueue = writeQueue.then(async () => {
    const ratings = await readRatings();
    const cityRatings = ratings[city] || {};
    const current = cityRatings[areaId] || { scoreTotal: 0, votes: 0, comments: [] };
    const comments = Array.isArray(current.comments) ? current.comments : [];
    const next = {
      scoreTotal: current.scoreTotal + numericRating,
      votes: current.votes + 1,
      comments: [
        ...comments,
        {
          rating: numericRating,
          text: commentText,
          createdAt: Date.now(),
        },
      ].slice(-40),
    };

    cityRatings[areaId] = next;
    ratings[city] = cityRatings;
    await writeRatings(ratings);

    return {
      areaId,
      score: next.scoreTotal / next.votes,
      votes: next.votes,
      comments: next.comments,
    };
  }));

  sendJson(response, 200, result);
}

async function handleForumGet(requestUrl, response) {
  const city = requestUrl.searchParams.get("city");
  const forum = await readForum();
  if (!city || typeof city !== "string") {
    sendJson(response, 400, { error: "city is required" });
    return;
  }
  sendJson(response, 200, forum[city] || []);
}

async function handleForumTopic(request, response) {
  const body = await readRequestBody(request);
  const { city, title, author, text } = JSON.parse(body || "{}");

  if (
    typeof city !== "string" ||
    typeof title !== "string" ||
    typeof author !== "string" ||
    typeof text !== "string" ||
    !city.trim() ||
    !title.trim() ||
    !author.trim() ||
    !text.trim()
  ) {
    sendJson(response, 400, { error: "Invalid topic payload" });
    return;
  }

  const created = await (writeQueue = writeQueue.then(async () => {
    const forum = await readForum();
    const cityThreads = forum[city] || [];
    const timestamp = Date.now();
    const thread = {
      id: `${city}-${timestamp}`,
      title: title.trim(),
      author: author.trim(),
      createdAt: timestamp,
      messages: [
        {
          id: `m-${timestamp}`,
          author: author.trim(),
          text: text.trim(),
          createdAt: timestamp,
        },
      ],
    };
    cityThreads.unshift(thread);
    forum[city] = cityThreads;
    await writeForum(forum);
    return thread;
  }));

  sendJson(response, 201, created);
}

async function handleForumReply(request, response) {
  const body = await readRequestBody(request);
  const { city, topicId, author, text } = JSON.parse(body || "{}");

  if (
    typeof city !== "string" ||
    typeof topicId !== "string" ||
    typeof author !== "string" ||
    typeof text !== "string" ||
    !city.trim() ||
    !topicId.trim() ||
    !author.trim() ||
    !text.trim()
  ) {
    sendJson(response, 400, { error: "Invalid reply payload" });
    return;
  }

  const result = await (writeQueue = writeQueue.then(async () => {
    const forum = await readForum();
    const cityThreads = forum[city] || [];
    const thread = cityThreads.find((item) => item.id === topicId);

    if (!thread) return null;

    const timestamp = Date.now();
    const message = {
      id: `m-${timestamp}`,
      author: author.trim(),
      text: text.trim(),
      createdAt: timestamp,
    };
    thread.messages.push(message);
    await writeForum(forum);
    return { topicId, message };
  }));

  if (!result) {
    sendJson(response, 404, { error: "Topic not found" });
    return;
  }

  sendJson(response, 201, result);
}

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === "GET" && requestUrl.pathname === "/api/ratings") {
      await handleRatings(requestUrl, response);
      return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/rate") {
      await handleRate(request, response);
      return;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/forum") {
      await handleForumGet(requestUrl, response);
      return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/forum/topic") {
      await handleForumTopic(request, response);
      return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/forum/reply") {
      await handleForumReply(request, response);
      return;
    }

    if (request.method === "GET") {
      await serveStatic(requestUrl, response);
      return;
    }

    response.writeHead(405);
    response.end("Method not allowed");
  } catch (error) {
    sendJson(response, 500, { error: "Server error", detail: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`RotaRadar demo running on http://127.0.0.1:${PORT}`);
});
