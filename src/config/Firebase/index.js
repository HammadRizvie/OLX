import { useState } from 'react';
import firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDa8QrxbEIA9zoZSaKfxkYUF3m2dSRKEGc",
  authDomain: "olx-temp.firebaseapp.com",
  projectId: "olx-temp",
  storageBucket: "olx-temp.appspot.com",
  messagingSenderId: "691154494878",
  appId: "1:691154494878:web:22e54a29aab96327f2e28f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  function DataEntry (text,images,price,fullName,contactNumber)
  {    db.collection('users').add({text,images,price,fullName,contactNumber})
    .then(res => {
      console.log('res ===>', res)
      alert("user login");
    }).catch(e => {
      console.log('error in user db', e.message)
    })

  }


  function DataCallBack ()
  {
    return db.collection('users').get();
  }

  export {
    DataEntry,
    DataCallBack
  }