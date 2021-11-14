

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import {GoogleAuthProvider, getAuth} from "firebase/auth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4vnm0bLFJ6qvKTWqXDMqIuj4r_Z437Zg",
  authDomain: "uber-nextjs-clone-live.firebaseapp.com",
  projectId: "uber-nextjs-clone-live",
  storageBucket: "uber-nextjs-clone-live.appspot.com",
  messagingSenderId: "969853574104",
  appId: "1:969853574104:web:7398eb234c9136fced30ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

const auth = getAuth()


export {app, provider, auth}