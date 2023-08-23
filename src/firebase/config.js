import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBpVQNdW4-fnEkXbLIrWkLylQEd_qvYN6Q",
    authDomain: "vue-blog-system-936bf.firebaseapp.com",
    projectId: "vue-blog-system-936bf",
    storageBucket: "vue-blog-system-936bf.appspot.com",
    messagingSenderId: "650911012893",
    appId: "1:650911012893:web:d36cbf2cd596e363ac0ef4"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth();

  let timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {db,timestamp,auth}

 