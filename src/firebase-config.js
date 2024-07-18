// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGEie-v6kr6knSkLE6RAwO_S5WdZBuWic",
  authDomain: "react-chatapp-6cd48.firebaseapp.com",
  projectId: "react-chatapp-6cd48",
  storageBucket: "react-chatapp-6cd48.appspot.com",
  messagingSenderId: "712064395803",
  appId: "1:712064395803:web:4ad6d44fa16384a2e226be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
