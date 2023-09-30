import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCUstIzj4rkWDDwj54YDeYPKirixR8yFjQ",
//   authDomain: "e-summit-23.firebaseapp.com",
//   projectId: "e-summit-23",
//   storageBucket: "e-summit-23.appspot.com",
//   messagingSenderId: "993378576778",
//   appId: "1:993378576778:web:719dec6168ae456936c073",
//   measurementId: "G-1RP58LL44S",
//   databaseURL: "https://e-summit-23-default-rtdb.firebaseio.com",
// };
const firebaseConfig = {
  apiKey: "AIzaSyD0p1bNaCfVeP5M2RPiiZVqKarjEZwm9CA",
  authDomain: "portfolio-d2956.firebaseapp.com",
  projectId: "portfolio-d2956",
  storageBucket: "portfolio-d2956.appspot.com",
  messagingSenderId: "819926489468",
  appId: "1:819926489468:web:355ab8114761a2d51bacf9",
  measurementId: "G-QKS84BFJKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
// const analytics = getAnalytics(app);
