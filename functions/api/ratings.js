const json = (payload, init = {}) =>
  new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init.headers || {}),
    },
  });

const demoRatings = {
  izmir: {},
  ankara: {},
  istanbul: {},
};

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");

  return json(city ? demoRatings[city] || {} : demoRatings);
}

export async function onRequestPost({ request }) {
  const body = await request.json().catch(() => ({}));
  const rating = Number(body.rating);
  const comment = typeof body.comment === "string" ? body.comment.trim() : "";

  if (!body.city || !body.areaId || !Number.isFinite(rating) || rating < 1 || rating > 5) {
    return json({ error: "Invalid rating payload" }, { status: 400 });
  }

  const comments = comment
    ? [
        {
          rating,
          text: comment,
          createdAt: Date.now(),
        },
      ]
    : [];

  return json({
    areaId: body.areaId,
    score: rating,
    votes: 1,
    comments,
  });
}
