import { functions, appwriteConfig } from "../lib/appwrite";

function parseExecutionBody(execution) {
  const body = execution?.responseBody || "{}";

  try {
    return JSON.parse(body);
  } catch {
    return { error: "Rota oluşturulamadı." };
  }
}

export async function calculateSafeRoute({
  start,
  end,
  mode,
  profile = "foot-walking",
  avoidPolygons = null,
}) {
  const body = JSON.stringify({
    start,
    end,
    mode,
    profile,
    avoidPolygons,
  });

  const execution = await functions.createExecution({
    functionId: appwriteConfig.safeRouteFunctionId,
    async: false,
    body,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });

  const payload = parseExecutionBody(execution);

  if (execution.responseStatusCode >= 400) {
    const error = new Error(payload.error || "Rota oluşturulamadı.");
    error.details = payload.details || "";
    error.statusCode = execution.responseStatusCode;
    throw error;
  }

  if (!payload?.routeGeoJson) {
    throw new Error("Rota oluşturulamadı.");
  }

  return payload;
}
