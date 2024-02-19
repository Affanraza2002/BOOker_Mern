// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQR-LkuU_IX_ZClbYMwExdX-xoicruQ8",
  authDomain: "booker-inventory.firebaseapp.com",
  projectId: "booker-inventory",
  storageBucket: "booker-inventory.appspot.com",
  messagingSenderId: "696240485554",
  appId: "1:696240485554:web:5e91699bb8146059fc85ab",
  measurementId: "G-EN1K39SFVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;  