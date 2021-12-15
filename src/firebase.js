import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB97YYKEIH0OiwiQMzq1N7FPlZ2E1O8n9M",
  authDomain: "storagefirebase-app.firebaseapp.com",
  projectId: "storagefirebase-app",
  storageBucket: "storagefirebase-app.appspot.com",
  messagingSenderId: "245530047808",
  appId: "1:245530047808:web:36cea3ba8da8ffbc9eb6a5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { firebase, auth, provider, db, storage };
