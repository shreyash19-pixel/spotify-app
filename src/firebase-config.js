import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB0sArDOxh64Qy7F3Znlfx7vuqdxpIv6GY",
    authDomain: "practice-5c610.firebaseapp.com",
    projectId: "practice-5c610",
    storageBucket: "practice-5c610.appspot.com",
    messagingSenderId: "474446518331",
    appId: "1:474446518331:web:0aa42764a9c99d5d3c241e"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)