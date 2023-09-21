// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzU7fkhoUe_VQo2w1BLKuraY8hlwCrnPM",
  authDomain: "photogallery-48a43.firebaseapp.com",
  projectId: "photogallery-48a43",
  storageBucket: "photogallery-48a43.appspot.com",
  messagingSenderId: "351166006512",
  appId: "1:351166006512:web:36a92be429837bf17c6e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);