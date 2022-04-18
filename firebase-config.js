import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyBQjqYU0iNEgIMrA7hQv6U85t3TwKJ4i8w",
    authDomain: "project1-8d422.firebaseapp.com",
    projectId: "project1-8d422",
    storageBucket: "project1-8d422.appspot.com",
    messagingSenderId: "537497916704",
    appId: "1:537497916704:web:9e2267620756324fb93345",
    measurementId: "G-XP4Q98YKPN"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);