import * as firebase from "firebase/app";
import 'firebase/firestore';
require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3o45iuUcKVdIpsJbzfCd7--lYKFgn9_8",
  authDomain: "clone-4d25d.firebaseapp.com",
  projectId: "clone-4d25d",
  storageBucket: "clone-4d25d.appspot.com",
  messagingSenderId: "961213449573",
  appId: "1:961213449573:web:ca5e1e32161fa2b2ee8d8c",
  measurementId: "G-KJBQ9HT30L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };