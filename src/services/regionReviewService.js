import {
  client,
  tablesDB,
  appwriteConfig,
  ID,
  Query,
} from "../lib/appwrite";

export async function getRegionReviews(regionId) {
  try {
    const response = await tablesDB.listRows(
      appwriteConfig.databaseId,
      appwriteConfig.regionReviewsTableId,
      [
        Query.equal("regionId", regionId),
        Query.orderDesc("$createdAt"),
        Query.limit(50),
      ],
    );

    return response.rows;
  } catch (error) {
    console.error("Appwrite region reviews listRows failed", {
      databaseId: appwriteConfig.databaseId,
      tableId: appwriteConfig.regionReviewsTableId,
      regionId,
      message: error?.message || String(error),
    });
    throw error;
  }
}

export async function createRegionReview({
  regionId,
  regionName,
  city,
  userName,
  rating,
  comment,
}) {
  const payload = {
    regionId,
    regionName,
    city,
    userName,
    rating,
    comment: comment || null,
  };

  try {
    return await tablesDB.createRow(
      appwriteConfig.databaseId,
      appwriteConfig.regionReviewsTableId,
      ID.unique(),
      payload,
    );
  } catch (error) {
    console.error("Appwrite region review createRow failed", {
      databaseId: appwriteConfig.databaseId,
      tableId: appwriteConfig.regionReviewsTableId,
      regionId,
      message: error?.message || String(error),
    });
    throw error;
  }
}

export function subscribeToRegionReviews(regionId, callback) {
  const channel = `databases.${appwriteConfig.databaseId}.tables.${appwriteConfig.regionReviewsTableId}.rows`;

  return client.subscribe(channel, (response) => {
    const createdEvent = response.events.some((event) => event.endsWith(".create"));
    if (!createdEvent) return;
    if (response?.payload?.regionId !== regionId) return;
    callback(response.payload);
  });
}

export function calculateAverageRating(reviews) {
  if (!Array.isArray(reviews) || reviews.length === 0) return null;
  const total = reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0);
  return total / reviews.length;
}
