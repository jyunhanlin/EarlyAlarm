import * as firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
  apiKey: "AIzaSyDc1qE45oruxhSzu7R8SD8rPfNqIS7Dkpk",
  authDomain: "early-alarm-pwa.firebaseapp.com",
  databaseURL: "https://early-alarm-pwa.firebaseio.com",
  storageBucket: "early-alarm-pwa.appspot.com",
  messagingSenderId: "291497610500"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

const googleSignInWithToken = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider)
    .then(() => {
      return getIdToken();
    }).catch(err => Promise.reject(err));
}


const signOut = () => auth.signOut();

const checkAuthStatus = (cb) => auth.onAuthStateChanged(cb);

const getIdToken = (forceRefresh = true) => auth.currentUser.getIdToken(forceRefresh);


export {
  auth,
  googleSignInWithToken,
  signOut,
  checkAuthStatus,
  getIdToken
};
