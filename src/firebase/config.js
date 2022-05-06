// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfHDAPUhBE-t8k41EHbOVpsy2q0kzKe_o",
  authDomain: "deccos-app.firebaseapp.com",
  projectId: "deccos-app",
  storageBucket: "deccos-app.appspot.com",
  messagingSenderId: "53449363588",
  appId: "1:53449363588:web:6213c4bfb2623bd944b2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth }