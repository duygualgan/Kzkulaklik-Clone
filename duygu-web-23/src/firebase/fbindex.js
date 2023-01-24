// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk4WcqOuAWwhuZyukiAY2rRyWELggHzs0",
  authDomain: "kzkulaklik-b88e5.firebaseapp.com",
  projectId: "kzkulaklik-b88e5",
  storageBucket: "kzkulaklik-b88e5.appspot.com",
  messagingSenderId: "386107343162",
  appId: "1:386107343162:web:16dba25f42d68491a3d003",
  measurementId: "G-HBDXVZP5JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth }