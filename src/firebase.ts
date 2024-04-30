import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "I don't know how can use dotenv..",
  authDomain: "//",
  projectId: "//",
  storageBucket: "//",
  messagingSenderId: "//",
  appId: "//"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getDatabase(app);
