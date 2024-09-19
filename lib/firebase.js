// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDqH1GGfv9IvFkHuvm6d3I8DnHpDOcvxY",
  authDomain: "myportfolio-9c6f5.firebaseapp.com",
  projectId: "myportfolio-9c6f5",
  storageBucket: "myportfolio-9c6f5.appspot.com",
  messagingSenderId: "967990852522",
  appId: "1:967990852522:web:2b58688a77606b0a6d89d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };