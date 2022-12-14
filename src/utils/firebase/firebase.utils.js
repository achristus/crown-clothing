import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHzLzVymcFyScxi4E5azbQRf-rsMNG30Q",
  authDomain: "crown-clothing-db-afc9b.firebaseapp.com",
  projectId: "crown-clothing-db-afc9b",
  storageBucket: "crown-clothing-db-afc9b.appspot.com",
  messagingSenderId: "317909981265",
  appId: "1:317909981265:web:80853d3ced594196788070",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
