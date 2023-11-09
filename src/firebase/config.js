// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvo-uGIvF3cyF_9WmwsPGTI3kvykyLVcY",
  authDomain: "react-curso-15836.firebaseapp.com",
  projectId: "react-curso-15836",
  storageBucket: "react-curso-15836.appspot.com",
  messagingSenderId: "765694862389",
  appId: "1:765694862389:web:ac27217521a652e7c07d7c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// Firebase Auth - con esto ya podemos usar las funciones de autenticación
export const FirebaseAuth = getAuth(FirebaseApp);
// Firebase DB - con esto ya podemos usar las funciones de la base de datos
export const FirebaseDB = getFirestore(FirebaseApp);