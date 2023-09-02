import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDNmszKeI3OWaetasHcd9KV5X1e_Gd4zWE",
    authDomain: "music-app-f4d35.firebaseapp.com",
    projectId: "music-app-f4d35",
    storageBucket: "music-app-f4d35.appspot.com",
    messagingSenderId: "494714094466",
    appId: "1:494714094466:web:9ce525908427c1bc9b859b",
    measurementId: "G-91143W267K"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)