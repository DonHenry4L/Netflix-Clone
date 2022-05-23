import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCc8kc34u4Fe_KEOLpRZEYfc1AAFMv6aXA",
  authDomain: "netflix-clone-2571d.firebaseapp.com",
  projectId: "netflix-clone-2571d",
  storageBucket: "netflix-clone-2571d.appspot.com",
  messagingSenderId: "511823324995",
  appId: "1:511823324995:web:9978ad9df0e1c8b09c31f6",
  measurementId: "G-1M8CE29LW0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
