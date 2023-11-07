/* eslint-disable no-undef */


// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import 'firebase/database'; // Import the Realtime Database module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE0Oqvb0vHYojslN-lIb4d1VBBjXDKfwg",
    authDomain: "brightspot-blog-c58ee.firebaseapp.com",
    databaseURL: "https://brightspot-blog-c58ee-default-rtdb.firebaseio.com",
    projectId: "brightspot-blog-c58ee",
    storageBucket: "brightspot-blog-c58ee.appspot.com",
    messagingSenderId: "223618641443",
    appId: "1:223618641443:web:2c2104390f6ab1cf798b96",
    measurementId: "G-ZS897SBSEL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default database;
