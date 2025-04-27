// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ETW1tDJ-l8zbMqV4Y38FJgkuvbYXmEo",
  authDomain: "aimoivebox.firebaseapp.com",
  projectId: "aimoivebox",
  storageBucket: "aimoivebox.firebasestorage.app",
  messagingSenderId: "16256024129",
  appId: "1:16256024129:web:edb18049e301d34a5750c0",
  measurementId: "G-D43DT4D813",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Config auth
export const auth = getAuth();
