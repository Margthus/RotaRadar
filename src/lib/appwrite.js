import { Client, TablesDB, ID, Query } from "appwrite";

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  messagesTableId: import.meta.env.VITE_APPWRITE_MESSAGES_TABLE_ID,
};

export const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

export const tablesDB = new TablesDB(client);

export { ID, Query };