import { Platform } from "react-native";
import { Client, Databases } from "react-native-appwrite";

export const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    db_id: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
    collections: {
        user: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_USER,
    },
};

export const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

switch (Platform.OS) {
    case "android":
        client.setPlatform("com.abhra.imagineai");
        break;
    // Add other platforms if necessary
    // case "ios":
}

export const database = new Databases(client);
