import { Client, TablesDB, Storage, Functions, ID, Query } from "appwrite";

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  messagesTableId: import.meta.env.VITE_APPWRITE_MESSAGES_TABLE_ID,
  regionReviewsTableId:
    import.meta.env.VITE_APPWRITE_REGION_REVIEWS_TABLE_ID || "region_reviews",
  safeRouteFunctionId:
    import.meta.env.VITE_APPWRITE_SAFE_ROUTE_FUNCTION_ID || "calculate-safe-route",
  forumImagesBucketId:
    import.meta.env.VITE_APPWRITE_FORUM_IMAGES_BUCKET_ID || "forum-images",
};

export const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

export const tablesDB = new TablesDB(client);
export const storage = new Storage(client);
export const functions = new Functions(client);

export { ID, Query };
