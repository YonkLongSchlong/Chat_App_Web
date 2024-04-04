// npm install firebase


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDQ4beRAwL3RBQ5fWiRfAvZUgscI27rXrc",
  authDomain: "chatweb-40db0.firebaseapp.com",
  projectId: "chatweb-40db0",
  storageBucket: "chatweb-40db0.appspot.com",
  messagingSenderId: "1015751843966",
  appId: "1:1015751843966:web:3ba09cddf2b2719addf82f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);