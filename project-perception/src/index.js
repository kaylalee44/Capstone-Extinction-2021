import React from "react";
import { render, ReactDOM } from "react-dom";
import App from "./App";
// import 'firebase/database';
// import * as firebase from "firebase/app";

// // import and configure firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDBNaDgwQBRxML1u22KXWfO-OzX-jdyYNI",
//   authDomain: "extinction-bff69.firebaseapp.com",
//   projectId: "extinction-bff69",
//   storageBucket: "extinction-bff69.appspot.com",
//   messagingSenderId: "952050036825",
//   appId: "1:952050036825:web:f0f8eaa6383d18d97a0148",
//   measurementId: "G-TPTK4B9J8H"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// firebase.database().ref('choices').remove(); //remove choices for refresh

render(
  <>
    <App />
  </>,
  document.getElementById("root")
);