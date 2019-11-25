import firebase from "@firebase/app"
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var fbConfig = {
  apiKey: "AIzaSyB-3SZJplpp4HndCcnZOkNyHbQ41XaYeMg",
  authDomain: "sng-website-6f1a3.firebaseapp.com",
  databaseURL: "https://sng-website-6f1a3.firebaseio.com",
  projectId: "sng-website-6f1a3",
  storageBucket: "sng-website-6f1a3.appspot.com",
  messagingSenderId: "1037967291150",
  appId: "1:1037967291150:web:23e4d6d6d75adc35dc1d5f"
};
// Initialize Firebase
const fb = firebase.initializeApp(fbConfig);
const db = firebase.firestore();
const st = firebase.storage()

export { fb, db, st } 
