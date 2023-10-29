import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtUtIS_QSZBZSeNyeQsJHMYJ4aAjq9f8E",
  authDomain: "blogproject-c2efe.firebaseapp.com",
  projectId: "blogproject-c2efe",
  storageBucket: "blogproject-c2efe.appspot.com",
  messagingSenderId: "559950569447",
  appId: "1:559950569447:web:bbe34edde5bdba4424e742",
  measurementId: "G-CFS4QP41BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();