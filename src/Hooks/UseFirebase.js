import { useState, useEffect } from "react"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import initializeFirebase from "../pages/Login/firebase/FirebaseInit";

initializeFirebase();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const registerUser = (email, password) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("")
        
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));

  };

  const logIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("")
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
  }

  const googleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
       setUser({})
      }
   });
    return () => unSubscribe;
  }, [auth])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }
    return {
      user,
      isLoading,
      registerUser,
      logIn,
      googleSingIn,
      logOut,
      error
  };
};

export default UseFirebase;
