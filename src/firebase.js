import firebase from "firebase";




const firebaseConfig = {
  apiKey: "AIzaSyAbwpAkLaQKJKeea9D2szjDpXnnx0TRRr4",
  authDomain: "clone-b0e3a.firebaseapp.com",
  projectId: "clone-b0e3a",
  storageBucket: "clone-b0e3a.appspot.com",
  messagingSenderId: "319564003964",
  appId: "1:319564003964:web:096db3b0134a113952e7f9",
  measurementId: "G-G47ZJ6V4HF"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };