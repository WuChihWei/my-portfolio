import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';  // 添加這行

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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);  // 添加這行

export { app, db, storage, auth };  // 導出 auth