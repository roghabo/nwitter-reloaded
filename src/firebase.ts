import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC33xSm8vI1YyyLPbQi1oz--IGW27-H1Fk",
  authDomain: "nwitter-reloaded-cc951.firebaseapp.com",
  projectId: "nwitter-reloaded-cc951",
  storageBucket: "nwitter-reloaded-cc951.appspot.com",
  messagingSenderId: "1004307077924",
  appId: "1:1004307077924:web:6283856f03c8506d6df1b1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

