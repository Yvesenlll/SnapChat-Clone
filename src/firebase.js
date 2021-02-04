import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAneDpZbwW4H_IuU00ZzaA-TcZMzBDw-tU",
    authDomain: "snapchat-clone-yv.firebaseapp.com",
    projectId: "snapchat-clone-yv",
    storageBucket: "snapchat-clone-yv.appspot.com",
    messagingSenderId: "737363815707",
    appId: "1:737363815707:web:112bafe3b9ce631756f7be",
    measurementId: "G-JHPQCZE8WG"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();
 const provider = new firebase.auth.GoogleAuthProvider();

 export{ db, auth, storage, provider };