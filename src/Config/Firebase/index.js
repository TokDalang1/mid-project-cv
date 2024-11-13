// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5EORhQmy7OSCzxtym1cYuLCYRmKtoVSU",
  authDomain: "mid-project-cv1.firebaseapp.com",
  projectId: "mid-project-cv1",
  storageBucket: "mid-project-cv1.firebasestorage.app",
  messagingSenderId: "4325528605",
  appId: "1:4325528605:web:a423741e0de2b7829d22f4",
  measurementId: "G-FRMMHEJTS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
