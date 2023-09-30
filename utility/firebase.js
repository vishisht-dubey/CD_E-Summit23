import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUstIzj4rkWDDwj54YDeYPKirixR8yFjQ",
  authDomain: "e-summit-23.firebaseapp.com",
  databaseURL: "https://summit-23-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "e-summit-23",
  storageBucket: "e-summit-23.appspot.com",
  messagingSenderId: "993378576778",
  appId: "1:993378576778:web:719dec6168ae456936c073",
  measurementId: "G-1RP58LL44S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
// const analytics = getAnalytics(app);
