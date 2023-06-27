// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-s9itEHkfAi2JDfa39OHpfBJdoTZgQ58",
  authDomain: "writeup-25b0c.firebaseapp.com",
  projectId: "writeup-25b0c",
  storageBucket: "writeup-25b0c.appspot.com",
  messagingSenderId: "946265834153",
  appId: "1:946265834153:web:79d4d0a99340320d821fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {auth, provider, db}