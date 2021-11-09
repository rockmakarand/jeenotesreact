import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import"firebase/auth"
var firebaseConfig = {
  apiKey: "AIzaSyBD7jUilM25OUDA0qEZ5Vx8wOEh4K-ESeo",
  authDomain: "reactjeenittweb.firebaseapp.com",
  projectId: "reactjeenittweb",
  storageBucket: "reactjeenittweb.appspot.com",
  messagingSenderId: "787546771872",
  appId: "1:787546771872:web:bed60410a46a5484aa94c5",
  measurementId: "G-20VSSYSWTW"
};
firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
      console.log(res.user)
    }).catch((error) => {
      console.log(error.message)
    })
  }
 export const facebookProvider = new firebase.auth.FacebookAuthProvider();
 




