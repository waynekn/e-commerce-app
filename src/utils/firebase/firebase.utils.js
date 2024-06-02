import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBAaAAmOVUQPL3tXcNprSFdOgy-3GOxak",
  authDomain: "crwn-clothing-db-91a0c.firebaseapp.com",
  projectId: "crwn-clothing-db-91a0c",
  storageBucket: "crwn-clothing-db-91a0c.appspot.com",
  messagingSenderId: "289909368220",
  appId: "1:289909368220:web:fcefc418e3f911847f5459",
  measurementId: "G-3BDZ0WFQD7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWitGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error createing the user", error.message);
    }
  }
  return userSnapShot;
};
