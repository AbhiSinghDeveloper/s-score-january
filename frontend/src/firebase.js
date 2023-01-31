// Your web app's Firebase configuration
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0YieAk27NPo5gpZsyXlzVbzG0KWZ9pHI",
  authDomain: "sscore-sist.firebaseapp.com",
  databaseURL: "https://sscore-sist-default-rtdb.firebaseio.com",
  projectId: "sscore-sist",
  storageBucket: "sscore-sist.appspot.com",
  messagingSenderId: "693698257885",
  appId: "1:693698257885:web:93df486cd4558852f00c34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const currUser = firebase.auth().currentUser;
export { db, auth, currUser };
