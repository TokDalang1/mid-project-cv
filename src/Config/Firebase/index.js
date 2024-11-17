// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8D1WwIj1jM1cWbTpxMdXYHrYgiXOxG3c",
  authDomain: "mid-project-cv.firebaseapp.com",
  projectId: "mid-project-cv",
  storageBucket: "mid-project-cv.firebasestorage.app",
  messagingSenderId: "249175717399",
  appId: "1:249175717399:web:97eaf733ee004bf3808e52",
  measurementId: "G-MR4Y4RMGHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
