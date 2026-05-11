import {
  client,
  tablesDB,
  storage,
  appwriteConfig,
  ID,
  Query,
} from "../lib/appwrite";

export async function getMessages(roomId = "general") {
  const response = await tablesDB.listRows(
    appwriteConfig.databaseId,
    appwriteConfig.messagesTableId,
    [
      Query.limit(200),
    ]
  );

  return response.rows
    .filter((row) => row.roomId === roomId)
    .sort((a, b) => new Date(a.$createdAt) - new Date(b.$createdAt));
}

export async function sendMessage({
  text,
  userName,
  roomId = "general",
  imageId,
}) {
  const cleanText = text.trim();
  const cleanUserName = userName.trim() || "Anonim";

  if (!cleanText) {
    return null;
  }

  try {
    const payload = {
      text: cleanText,
      userName: cleanUserName,
      roomId,
    };
    if (imageId) payload.imageId = imageId;

    return await tablesDB.createRow(
      appwriteConfig.databaseId,
      appwriteConfig.messagesTableId,
      ID.unique(),
      payload
    );
  } catch (error) {
    console.error("Appwrite createRow failed", {
      databaseId: appwriteConfig.databaseId,
      tableId: appwriteConfig.messagesTableId,
      roomId,
      message: error?.message || String(error),
    });
    throw error;
  }
}

export async function uploadForumImage(file) {
  const uploaded = await storage.createFile(
    appwriteConfig.forumImagesBucketId,
    ID.unique(),
    file
  );
  return uploaded.$id;
}

export function getForumImageUrl(imageId) {
  if (!imageId) return "";
  const endpoint = String(appwriteConfig.endpoint || "").replace(/\/$/, "");
  const bucketId = appwriteConfig.forumImagesBucketId || "forum-images";
  const projectId = appwriteConfig.projectId || "";
  return `${endpoint}/storage/buckets/${bucketId}/files/${imageId}/view?project=${projectId}`;
}

export function subscribeToMessages(roomId, callback) {
  const channel = `databases.${appwriteConfig.databaseId}.tables.${appwriteConfig.messagesTableId}.rows`;

  return client.subscribe(channel, (response) => {
    const createdEvent = response.events.some((event) =>
      event.endsWith(".create")
    );

    if (!createdEvent) return;
    if (response?.payload?.roomId !== roomId) return;

    callback(response.payload);
  });
}
