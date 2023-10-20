// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKIkXJqqvqwR2ZMGPm_rP3rcK2zuwWz8",
  authDomain: "ranknft-d5039.firebaseapp.com",
  projectId: "ranknft-d5039",
  storageBucket: "ranknft-d5039.appspot.com",
  messagingSenderId: "625761567991",
  appId: "1:625761567991:web:ec1fe4a6f9bf2308e23ff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 