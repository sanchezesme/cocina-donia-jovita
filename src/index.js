import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

var firebaseConfig = {
  apiKey: "AIzaSyBc5RyQ3YhCRbuCqZBKpWJRTWV9IoN-Ad4",
  authDomain: "red-coffe.firebaseapp.com",
  projectId: "red-coffe",
  storageBucket: "red-coffe.appspot.com",
  messagingSenderId: "952543782236",
  appId: "1:952543782236:web:26a43cffb85623527bcd99",
  measurementId: "G-XRJGCNSM0G"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.functions().useFunctionsEmulator('http://localhost:5001');

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
