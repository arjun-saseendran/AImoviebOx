// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2bw6jmAYmHTJevRbEqQGL0zc24quqnM0",
  authDomain: "netflixgpt-17ae7.firebaseapp.com",
  projectId: "netflixgpt-17ae7",
  storageBucket: "netflixgpt-17ae7.firebasestorage.app",
  messagingSenderId: "1005923622985",
  appId: "1:1005923622985:web:e55e155beb6b31a1a11f98",
  measurementId: "G-LY36KGPWPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);