import firebase from "firebase/app"
import "firebase/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMqjm638T96GoOA-C0STrVHR10oTGBJLM",
    authDomain: "codewarrior-4ff8e.firebaseapp.com",
    databaseURL: "https://codewarrior-4ff8e.firebaseio.com",
    projectId: "codewarrior-4ff8e",
    storageBucket: "codewarrior-4ff8e.appspot.com",
    messagingSenderId: "356357606871",
    appId: "1:356357606871:web:b3d692d78ddfac45488f92",
    measurementId: "G-32MR4YZBH9"
});
const database = firebaseApp.firestore()
export {database} 