// appwriteConfig.ts
import { Client, Databases, Storage, ID } from "appwrite";

export const PROJECT_ID = process.env.PROJECT_ID;
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT_ID;
export const DATABASE_ID = process.env.DATABASE_ID;
export const USUARIO_COLLECTION_ID = process.env.USUARIO_COLLECTION_ID;

if (!ENDPOINT || !PROJECT_ID || !DATABASE_ID || !USUARIO_COLLECTION_ID) {
  console.error("Las variables deben estar definidas correctamente.");
}

const client = new Client();

if (ENDPOINT && PROJECT_ID) {
  client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
}

export const databases = new Databases(client);
export const storage = new Storage(client);
