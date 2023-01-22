// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuqmVOraaGHI7TzN4Uf8XTLr5JhPjq_VA",
  authDomain: "react-todo-rabi.firebaseapp.com",
  projectId: "react-todo-rabi",
  storageBucket: "react-todo-rabi.appspot.com",
  messagingSenderId: "313666251601",
  appId: "1:313666251601:web:01913e3d51bc0e0092c170",
  measurementId: "G-L59H1MF1WY"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}