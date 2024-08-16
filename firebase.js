// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzIwtqPa8wTYKZxsEryE2PuZpdeuDVkFk",
  authDomain: "flashcards-157d0.firebaseapp.com",
  projectId: "flashcards-157d0",
  storageBucket: "flashcards-157d0.appspot.com",
  messagingSenderId: "763243073242",
  appId: "1:763243073242:web:c17db02d206112ffa41fe3",
  measurementId: "G-WRNVGBKNT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestone(app);
const auth = getAuth(app);

export { db, auth };
