import React from "react";
import { render } from "react-dom";
import App from "./App";
import firebase from 'firebase/app';
import 'firebase/database';

// import and configure firebase
const firebaseConfig = {
  apiKey: "AIzaSyCE1jFjkPh4MksEP1Kjr3mx18-UPl4Ip9c",
  authDomain: "project-perception-47835.firebaseapp.com",
  databaseURL: "https://project-perception-47835-default-rtdb.firebaseio.com",
  projectId: "project-perception-47835",
  storageBucket: "project-perception-47835.appspot.com",
  messagingSenderId: "641448027241",
  appId: "1:641448027241:web:c5e3e1bc1753133ebbaef8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref('choices').remove(); //remove choices for refresh

render(
  <>
    <App />
  </>,
  document.getElementById("root")
);