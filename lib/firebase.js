import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


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
const db = getFirestore(app);

export { app, db };