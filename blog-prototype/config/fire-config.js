import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8a6fl8PB4ooVNP3QLiOj_RgsV9eaVaNY",
  authDomain: "eren-reads.firebaseapp.com",
  projectId: "eren-reads",
  storageBucket: "eren-reads.appspot.com",
  messagingSenderId: "179434162721",
  appId: "1:179434162721:web:5ef142d2a6a383e50ff160",
  measurementId: "G-H2JK9RFV3S",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
export default fire;
