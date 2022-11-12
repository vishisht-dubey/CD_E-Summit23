import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7g7ilkOc-cvLrsmvpoeDNP8jLTb-iA8A",
  authDomain: "cd-portal-13bd6.firebaseapp.com",
  projectId: "cd-portal-13bd6",
  storageBucket: "cd-portal-13bd6.appspot.com",
  messagingSenderId: "383015365933",
  appId: "1:383015365933:web:8f83537057f46b6323f7a4",
  measurementId: "G-HP7TXR7VDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
