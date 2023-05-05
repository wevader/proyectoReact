// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJQ1xcKBNXfmDc05JDZtDwyhFvKemNtS0",
  authDomain: "nobber-e-commerce.firebaseapp.com",
  projectId: "nobber-e-commerce",
  storageBucket: "nobber-e-commerce.appspot.com",
  messagingSenderId: "658302333925",
  appId: "1:658302333925:web:75dbe5fb9d411f0fb5f50c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app