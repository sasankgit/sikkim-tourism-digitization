// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGglryEt5Zcndd6E9WUYtWr4HlZJmb9PQ",
  authDomain: "sikkim-sih.firebaseapp.com",
  projectId: "sikkim-sih",
  storageBucket: "sikkim-sih.firebasestorage.app",
  messagingSenderId: "982127278433",
  appId: "1:982127278433:web:7f2dcdea077c92df8fed20",
  measurementId: "G-BXTWM7P9HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
