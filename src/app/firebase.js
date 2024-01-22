 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc2Qy7iN5PUu6GmRtOSEA6GSHw-hgB2SM",
  authDomain: "mystore-402ba.firebaseapp.com",
  projectId: "mystore-402ba",
  storageBucket: "mystore-402ba.appspot.com",
  messagingSenderId: "128551434256",
  appId: "1:128551434256:web:4e2ea9346aae4b770cb295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);