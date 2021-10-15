import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlL5fPoJCgCFR9pADfFePXNv32pT6H304",
  authDomain: "nuxt-firebase-c3793.firebaseapp.com",
  projectId: "nuxt-firebase-c3793",
  storageBucket: "nuxt-firebase-c3793.appspot.com",
  messagingSenderId: "966850815859",
  appId: "1:966850815859:web:912b9336debf0ff0490706"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}