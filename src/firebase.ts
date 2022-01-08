// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { User, getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjDjpNZ5QCPHI1Mbsw7Pwhzce0-n2IcUY",
  authDomain: "trivianightdb.firebaseapp.com",
  projectId: "trivianightdb",
  storageBucket: "trivianightdb.appspot.com",
  messagingSenderId: "507550152972",
  appId: "1:507550152972:web:d917fefc7c5827dd05b129",
  measurementId: "G-4RWJV5JX3B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authProvider = {
  authObject: auth,
  currentUser: auth.currentUser,
  onAuthStateChanged: (callback: (value: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
  },
  signOut: () => {
    console.log("signing out");
    signOut(auth);
  },
  signInWithGoogle: () => {
    console.log("signing in");
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  },
};

export {
  type User,
  authProvider,
};
