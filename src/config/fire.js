import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyB4yhIYpZU_ChrvGW2y-a08nOgnXH8grg0",
    authDomain: "plansmanager-8.firebaseapp.com",
    databaseURL: "https://plansmanager-8.firebaseio.com",
    projectId: "plansmanager-8",
    storageBucket: "plansmanager-8.appspot.com",
    messagingSenderId: "250144821088",
    appId: "1:250144821088:web:4b76765a86ab35c8159805",
    measurementId: "G-LX4BHEQ56H"
  };


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth;
export const db = firebase.database;
export const firestore = firebase.firestore;
