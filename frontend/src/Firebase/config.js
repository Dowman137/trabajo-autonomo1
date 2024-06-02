// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGLlsoJAJ6L6dbrrNTbMS0sCSicuMTF_8",
  authDomain: "desarrollo-web-2-bfdd2.firebaseapp.com",
  projectId: "desarrollo-web-2-bfdd2",
  storageBucket: "desarrollo-web-2-bfdd2.appspot.com",
  messagingSenderId: "637625171957",
  appId: "1:637625171957:web:5438ccdac810a4650c2abc",
  measurementId: "G-E53Y9B1P6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };