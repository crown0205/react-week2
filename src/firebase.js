// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMsUAxJLBVTJAh52viS2SnTU1WSUfHBLI",
  authDomain: "card-list-63523.firebaseapp.com",
  projectId: "card-list-63523",
  storageBucket: "card-list-63523.appspot.com",
  messagingSenderId: "634653489254",
  appId: "1:634653489254:web:d93b4b5eaf122b419255a7",
  measurementId: "G-5NNL94YWBB"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();