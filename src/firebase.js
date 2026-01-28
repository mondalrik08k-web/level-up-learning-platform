// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVM92UQTlCs0Ed5VkUaGmGFiWlDX82T0w",
  authDomain: "level-up-d219a.firebaseapp.com",
  projectId: "level-up-d219a",
  storageBucket: "level-up-d219a.appspot.com",
  messagingSenderId: "79509784293",
  appId: "1:79509784293:web:9dd1bcc9088ecd9f8c760c",
  measurementId: "G-XRVF567E9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth };

