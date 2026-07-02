import dotenv from "dotenv";
dotenv.config();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || process.env.API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || process.env.AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID || process.env.PROJECT_ID,
  storageBucket:
    process.env.FIREBASE_STORAGE_BUCKET || process.env.STORAGE_BUCKET,
  messagingSenderId:
    process.env.FIREBASE_MESSAGING_SENDER_ID || process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID || process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;