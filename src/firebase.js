// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXBTm7JCcjaQT2kmLJrv7JPj3r7ilanWo",
  authDomain: "card-list-project.firebaseapp.com",
  projectId: "card-list-project",
  storageBucket: "card-list-project.appspot.com",
  messagingSenderId: "291422086307",
  appId: "1:291422086307:web:5ecdf6143c558793158b16",
  measurementId: "G-J01J42GVLK"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();