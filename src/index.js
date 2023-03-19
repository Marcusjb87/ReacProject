import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj6NWcF5xujtVRQ_rz0zqidur8hOMhiWo",
  authDomain: "coder-react-5a600.firebaseapp.com",
  projectId: "coder-react-5a600",
  storageBucket: "coder-react-5a600.appspot.com",
  messagingSenderId: "1022725855112",
  appId: "1:1022725855112:web:b973baada7d6b8bf918c3d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);