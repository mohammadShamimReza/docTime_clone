import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../pages/Login/firebase/FirebaseInit";

initializeFirebase();

const UseFirebase = () => {
  const auth = getAuth();
  const registerUser = (name, email, password) => {
  
    console.log(name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  };
  
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('user is sign Out')
      })
      .catch((error) => {
        console.log(error)
      });
  }

    return {
      registerUser,
      login,
      logOut
  };
};

export default UseFirebase;
