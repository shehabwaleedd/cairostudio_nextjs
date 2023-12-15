// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-ov3uccqM2r4fjWPDoqNGQDFiu3SBIkk",
    authDomain: "cairo-studio-94ed8.firebaseapp.com",
    projectId: "cairo-studio-94ed8",
    storageBucket: "cairo-studio-94ed8.appspot.com",
    messagingSenderId: "330092202147",
    appId: "1:330092202147:web:3c3ed818acd76fbe5e5716",
    measurementId: "G-0PP8CTFSLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
