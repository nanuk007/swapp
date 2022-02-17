import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAqoKAmsMWW4l36kUsXCK1UeHewM8Dc1kQ",
//   authDomain: "swapp-c406c.firebaseapp.com",
//   projectId: "swapp-c406c",
//   storageBucket: "swapp-c406c.appspot.com",
//   messagingSenderId: "532251673369",
//   appId: "1:532251673369:web:30fc7b59dce464c448fb88",
//   measurementId: "G-4DHM1LZR6T"
// };

// const FireBaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(FireBaseApp);
// console.log(analytics);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
