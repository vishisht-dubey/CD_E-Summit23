// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa61DviHlgR3LLPQKQ4ABuwdO7_eX4sro",
  authDomain: "test-pro-prod.firebaseapp.com",
  projectId: "test-pro-prod",
  storageBucket: "test-pro-prod.appspot.com",
  messagingSenderId: "784978236687",
  appId: "1:784978236687:web:c97e63a2d00789d2f01a7a",
  measurementId: "G-1BH4RDYNLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
