// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZeB1n14RDvVOBO5ME4iQp7bqHp2lQzyA",
  authDomain: "react-tarea-ff277.firebaseapp.com",
  projectId: "react-tarea-ff277",
  storageBucket: "react-tarea-ff277.appspot.com",
  messagingSenderId: "644043645757",
  appId: "1:644043645757:web:5e56774cd3691c18d9db54"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseBD = getFirestore(FirebaseApp )