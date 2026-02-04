
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAl0rJWaMSKCrt7CWWv8or6VjNpSMn34Wc",
  authDomain: "mernai-7715f.firebaseapp.com",
  projectId: "mernai-7715f",
  storageBucket: "mernai-7715f.firebasestorage.app",
  messagingSenderId: "463057180958",
  appId: "1:463057180958:web:bbf2aef04ecfa3fbbdd10f",
  measurementId: "G-MS76GB01YL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
