

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAm6HQbXBeU3sx_Bafslx1MVu08jxtE1cQ",
    authDomain: "portfolio-5bbcf.firebaseapp.com",
    databaseURL: "https://portfolio-5bbcf-default-rtdb.firebaseio.com",
    projectId: "portfolio-5bbcf",
    storageBucket: "portfolio-5bbcf.appspot.com",
    messagingSenderId: "87753064877",
    appId: "1:87753064877:web:5c5407af37579dd8a3e124",
    measurementId: "G-4HE0KVVZV9"
  };
  const app = initializeApp(firebaseConfig);

export {app};