// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu_9z_kjEfgPVBLeK5kU81GB7o4DtPfcg",
  authDomain: "netflixgpt-16fcd.firebaseapp.com",
  projectId: "netflixgpt-16fcd",
  storageBucket: "netflixgpt-16fcd.firebasestorage.app",
  messagingSenderId: "990283517621",
  appId: "1:990283517621:web:00881bf93f98d16174b8fc",
  measurementId: "G-857JDRFQ13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
