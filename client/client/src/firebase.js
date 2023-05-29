// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-nSqonLJxtoVy2ZG1uub1e0QpXRdw5Vo",
  authDomain: "bookingsouq-e14e8.firebaseapp.com",
  projectId: "bookingsouq-e14e8",
  storageBucket: "bookingsouq-e14e8.appspot.com",
  messagingSenderId: "482520729165",
  appId: "1:482520729165:web:5e318ac0b35178fa4a3e04",
  measurementId: "G-JEL4V5E8SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();

export default app;