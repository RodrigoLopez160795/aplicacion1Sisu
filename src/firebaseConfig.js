import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDIHEEdl8yV8VC8aoWc1Z5rZRg9RwtFu8",
  authDomain: "aplicacion1-8700e.firebaseapp.com",
  projectId: "aplicacion1-8700e",
  storageBucket: "aplicacion1-8700e.appspot.com",
  messagingSenderId: "264867475035",
  appId: "1:264867475035:web:95fcaa44b7278dfdc9d97e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
