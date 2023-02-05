import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp5ggs2qhtdHnnrYKr5oBBXP7M9_5BWiQ",
  authDomain: "codecraft-850bd.firebaseapp.com",
  databaseURL: "https://codecraft-850bd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "codecraft-850bd",
  storageBucket: "codecraft-850bd.appspot.com",
  messagingSenderId: "782237452734",
  appId: "1:782237452734:web:8d183e1a631c64b32211ef",
  measurementId: "G-D0YDYH2T2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)