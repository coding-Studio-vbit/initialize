import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_TEST_VAR,
  authDomain: "initialize-3dbb7.firebaseapp.com",
  projectId: "initialize-3dbb7",
  storageBucket: "initialize-3dbb7.appspot.com",
  messagingSenderId: "40755346628",
  appId: "1:40755346628:web:af7e2d2b492ba694549d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)