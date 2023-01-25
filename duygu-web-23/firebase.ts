import firebase  from 'firebase';
import { ref, onUnmounted } from "vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

const db = firebaseApp.firestore();
const userCollection = db.collection("users");

export const createUser = (user: any) => {
  return userCollection.add(user);
};

export const getUser = async (id: any) => {
  const user = await userCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id: any, user: any) => {
  return userCollection.doc(id).update(user);
};

export const deleteUser = (id: any) => {
  return userCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = userCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return users;
};

export const auth = getAuth();