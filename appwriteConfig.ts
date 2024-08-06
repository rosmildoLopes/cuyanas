// appwriteConfig.ts
import { Client, Databases, Storage } from "appwrite";

export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT_ID;
export const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
export const USUARIO_COLLECTION_ID =
  process.env.NEXT_PUBLIC_USUARIO_COLLECTION_ID;
export const NEXT_PUBLIC_BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;

if (
  !ENDPOINT ||
  !PROJECT_ID ||
  !DATABASE_ID ||
  !USUARIO_COLLECTION_ID ||
  !NEXT_PUBLIC_BUCKET_ID
) {
  console.error("Las variables deben estar definidas correctamente.");
}

const client = new Client();

if (ENDPOINT && PROJECT_ID) {
  client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);
}

export const databases = new Databases(client);
export const storage = new Storage(client);
