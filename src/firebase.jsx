import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB-GpgsqesC5iOImRfTq6UGS9wKRpRIoYQ",
  authDomain: "clone-8ec6c.firebaseapp.com",
  projectId: "clone-8ec6c",
  storageBucket: "clone-8ec6c.appspot.com",
  messagingSenderId: "580860610708",
  appId: "1:580860610708:web:c19f4f9f9a05223f294c81",
  measurementId: "G-4X09P1Z6ST"
};

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };