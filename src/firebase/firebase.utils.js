import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxrz9MQPNOi2LOD9Xq1CRRA9kC2we3CrQ",
  authDomain: "crwn-db-a4f17.firebaseapp.com",
  databaseURL: "https://crwn-db-a4f17.firebaseio.com",
  projectId: "crwn-db-a4f17",
  storageBucket: "",
  messagingSenderId: "891064831667",
  appId: "1:891064831667:web:ac1f95323e2e62af146ac6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
