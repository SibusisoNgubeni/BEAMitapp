import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3dT01cNcL_1i4veKAo-WfleFMQCCR-ew",
  authDomain: "beamit-8f975.firebaseapp.com",
  projectId: "beamit-8f975",
  storageBucket: "beamit-8f975.appspot.com",
  messagingSenderId: "44957593769",
  appId: "1:44957593769:web:0cdc9a7079ef83dcc379b8",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

const auth = getAuth();
signOut(auth)
  .then(() => {})
  .catch((error) => {});
