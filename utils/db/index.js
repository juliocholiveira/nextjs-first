import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:
        "firebase-adminsdk-ju9hm@nextjs-first.iam.gserviceaccount.com",
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
