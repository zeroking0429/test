import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5wnSCCMLmcDQgss9qTtgh0rdlOJzTIcQ",
  authDomain: "zwitter-reloaded-5346b.firebaseapp.com",
  projectId: "zwitter-reloaded-5346b",
  storageBucket: "zwitter-reloaded-5346b.appspot.com",
  messagingSenderId: "126831334402",
  appId: "1:126831334402:web:7ea259f54b72ee334c431b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
