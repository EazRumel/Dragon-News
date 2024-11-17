// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDujscCR5ugF4PqkyAZrU7voxB-T6fVt9s",
  authDomain: "dragon-news-29d7b.firebaseapp.com",
  projectId: "dragon-news-29d7b",
  storageBucket: "dragon-news-29d7b.firebasestorage.app",
  messagingSenderId: "321228484122",
  appId: "1:321228484122:web:cc58e54526ec60b237aba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;