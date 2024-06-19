// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_r9JDisdEPrc2-NhOFLdNIDOI_yidjFU",
  authDomain: "job-portal-ca3d0.firebaseapp.com",
  databaseURL: "https://job-portal-ca3d0-default-rtdb.firebaseio.com",
  projectId: "job-portal-ca3d0",
  storageBucket: "job-portal-ca3d0.appspot.com",
  messagingSenderId: "435780088453",
  appId: "1:435780088453:web:547a9cd8538d7ce79c2fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);
export {db,auth};