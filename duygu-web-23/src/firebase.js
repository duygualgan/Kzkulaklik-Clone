import firebase  from "firebase/app";
import { ref, onUnmounted } from "vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

const config = {
    apiKey: "AIzaSyCk4WcqOuAWwhuZyukiAY2rRyWELggHzs0",
    authDomain: "kzkulaklik-b88e5.firebaseapp.com",
    projectId: "kzkulaklik-b88e5",
    storageBucket: "kzkulaklik-b88e5.appspot.com",
    messagingSenderId: "386107343162",
    appId: "1:386107343162:web:16dba25f42d68491a3d003",
    measurementId: "G-HBDXVZP5JJ"
  };

const firebaseApp = firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export {
  firebase,
  auth,
  db,
  storage,
  functions
}

