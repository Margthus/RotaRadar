const json = (res, payload, statusCode = 200) =>
  res.json(payload, statusCode, {
    "content-type": "application/json; charset=utf-8",
  });

const isCoordinatePair = (value) =>
  Array.isArray(value)
  && value.length === 2
  && value.every((item) => Number.isFinite(Number(item)));

const normalizeWaypoints = (value) =>
  Array.isArray(value)
    ? value.filter(isCoordinatePair).map((pair) => pair.map(Number))
    : [];

const normalizeProfile = (value) => {
  if (value === "driving-car") return "driving-car";
  return "foot-walking";
};

const getSummary = (routeData) => {
  const feature = routeData?.features?.[0];
  const summary = feature?.properties?.summary;

  return {
    distance: Number(summary?.distance || 0),
    duration: Number(summary?.duration || 0),
  };
};

export default async ({ req, res, log, error }) => {
  const baseUrl = String(process.env.ORS_BASE_URL || "https://api.openrouteservice.org").replace(/\/$/, "");
  const apiKey = process.env.ORS_API_KEY;

  if (!apiKey) {
    error("Missing ORS_API_KEY");
    return json(res, { error: "Rota oluşturulamadı." }, 500);
  }

  const payload = req.bodyJson || {};
  const {
    start,
    end,
    waypoints = [],
    mode,
    profile = "foot-walking",
    avoidPolygons = null,
  } = payload;

  if (!isCoordinatePair(start) || !isCoordinatePair(end)) {
    return json(res, { error: "Rota oluşturulamadı." }, 400);
  }

  const normalizedWaypoints = normalizeWaypoints(waypoints);

  const requestBody = {
    coordinates: [start.map(Number), ...normalizedWaypoints, end.map(Number)],
    instructions: false,
    options: {
      avoid_features: ["ferries"],
    },
  };

  if (mode === "safest" && avoidPolygons) {
    requestBody.options = {
      ...requestBody.options,
      avoid_polygons: avoidPolygons,
    };
  }

  const requestUrl = `${baseUrl}/v2/directions/${normalizeProfile(profile)}/geojson`;

  try {
    const routeResponse = await fetch(requestUrl, {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
        Accept: "application/geo+json, application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!routeResponse.ok) {
      const detail = await routeResponse.text();
      error(`ORS directions failed: ${routeResponse.status} ${detail}`);
      return json(
        res,
        {
          error: "Rota oluşturulamadı.",
        },
        routeResponse.status >= 400 && routeResponse.status < 600 ? routeResponse.status : 502,
      );
    }

    const routeData = await routeResponse.json();
    const summary = getSummary(routeData);

    log(`Route created: mode=${mode || "fastest"} distance=${summary.distance} duration=${summary.duration}`);
    return json(res, {
      routeGeoJson: routeData,
      distance: summary.distance,
      duration: summary.duration,
    });
  } catch (requestError) {
    error(`ORS request exception: ${requestError?.message || String(requestError)}`);
    return json(res, { error: "Rota oluşturulamadı." }, 500);
  }
};
