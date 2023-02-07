import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhk1I6pry6ZfNbnWzGoeSueYUeb04TiA4",
    authDomain: "vico-cb24c.firebaseapp.com",
    projectId: "vico-cb24c",
    storageBucket: "vico-cb24c.appspot.com",
    messagingSenderId: "53192670969",
    appId: "1:53192670969:web:76e66b978b3fff5b84ec28"
  };
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)