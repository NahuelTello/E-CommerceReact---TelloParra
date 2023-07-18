// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwGL-1MMxPF9EgCPZCO2OXTV69bbsltvA",
    authDomain: "my-e-commercesn.firebaseapp.com",
    projectId: "my-e-commercesn",
    storageBucket: "my-e-commercesn.appspot.com",
    messagingSenderId: "78069970958",
    appId: "1:78069970958:web:a7e9cd28a5f6570a39645f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);