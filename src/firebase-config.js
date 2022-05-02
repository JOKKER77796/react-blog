import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDxdhK6qiP2asrLwK9bnWJC54gL73Mp0vM",

  authDomain: "blogproject-6ced2.firebaseapp.com",

  projectId: "blogproject-6ced2",

  storageBucket: "blogproject-6ced2.appspot.com",

  messagingSenderId: "255001064290",

  appId: "1:255001064290:web:971b18db4e6a91edd1723b"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

