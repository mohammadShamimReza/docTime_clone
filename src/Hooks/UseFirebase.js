import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from "../pages/Login/firebase/FirebaseInit";

initializeFirebase();

const UseFirebase = () => {
  const auth = getAuth();
  const registerUser = (name, email, password) => [
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }),
  ];

    return {
      registerUser,
  };
};

export default UseFirebase;
