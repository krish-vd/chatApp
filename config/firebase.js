import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBqY6aQO_IkACK9EySx64JeAdQw0Hoz918",
  authDomain: "chatapp-d889c.firebaseapp.com",
  projectId: "chatapp-d889c",
  storageBucket: "chatapp-d889c.appspot.com",
  messagingSenderId: "19531533408",
  appId: "1:19531533408:web:4a89a944bdf54f414dc705"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
