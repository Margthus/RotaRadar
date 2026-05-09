const json = (payload, init = {}) =>
  new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init.headers || {}),
    },
  });

const demoReports = [
  {
    id: "report-1",
    city: "istanbul",
    areaId: "sultanahmet",
    type: "kalabalik",
    text: "Akşam saatlerinde meydan çevresi yoğun.",
    createdAt: 1778317838031,
  },
];

export async function onRequestGet() {
  return json(demoReports);
}

export async function onRequestPost({ request }) {
  const body = await request.json().catch(() => ({}));

  return json(
    {
      ok: true,
      report: {
        id: `report-${Date.now()}`,
        city: body.city || "demo",
        areaId: body.areaId || "unknown",
        type: body.type || "general",
        text: body.text || "",
        createdAt: Date.now(),
      },
    },
    { status: 201 },
  );
}
