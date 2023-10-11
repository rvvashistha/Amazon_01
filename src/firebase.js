import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVDOHArpEaWqqAXVGb9h2BNkQsVLmr4AQ",
  authDomain: "clone-01-82681.firebaseapp.com",
  projectId: "clone-01-82681",
  storageBucket: "clone-01-82681.appspot.com",
  messagingSenderId: "122158944491",
  appId: "1:122158944491:web:f6de040224facfa91eeeae",
  measurementId: "G-VYDV35PBKL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
