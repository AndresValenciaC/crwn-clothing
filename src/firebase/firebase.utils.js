import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_2ucGNOIy1Ed9zP6mKgjAYhzuISweQj8",
  authDomain: "crwn-db-d3575.firebaseapp.com",
  databaseURL: "https://crwn-db-d3575.firebaseio.com",
  projectId: "crwn-db-d3575",
  storageBucket: "crwn-db-d3575.appspot.com",
  messagingSenderId: "221185548784",
  appId: "1:221185548784:web:86f8659112abac228cfd35",
  measurementId: "G-9JQ6Y7ECKZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promp: "select_acount" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
