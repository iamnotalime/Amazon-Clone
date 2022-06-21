import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBYiKTxmPk6sypal71zwGQIrYfdk_7cvZg",
    authDomain: "meversion-f0cae.firebaseapp.com",
    projectId: "meversion-f0cae",
    storageBucket: "meversion-f0cae.appspot.com",
    messagingSenderId: "924768822042",
    appId: "1:924768822042:web:5cacff2108e878a117c2a3"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;