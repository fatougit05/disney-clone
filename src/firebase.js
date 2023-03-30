import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAgwjutpJHjCeeaeqwvLtWEEZGzcMO7qcE",
  authDomain: "disneyplus-clone-92a68.firebaseapp.com",
  projectId: "disneyplus-clone-92a68",
  storageBucket: "disneyplus-clone-92a68.appspot.com",
  messagingSenderId: "872893156896",
  appId: "1:872893156896:web:ccf003c93ea62a93fd3645",
  measurementId: "G-91PWCBHFKB"
};
   const app = initializeApp(firebaseConfig);
   const auth = getAuth();
   const db = getFirestore(app);
   const provider = new GoogleAuthProvider();
const storage = getStorage()
   export {auth , provider , storage };

export default db;





