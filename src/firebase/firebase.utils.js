import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBmId9OdLk2VN4VBODo3dijZlVAZYReWes",
  authDomain: "crwn-db-a12ed.firebaseapp.com",
  databaseURL: "https://crwn-db-a12ed.firebaseio.com",
  projectId: "crwn-db-a12ed",
  storageBucket: "crwn-db-a12ed.appspot.com",
  messagingSenderId: "58341798875",
  appId: "1:58341798875:web:85530924873b62d91badfe",
  measurementId: "G-6NS5CJRSFH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(`userAuth: ${userAuth}`);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
