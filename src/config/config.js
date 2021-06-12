import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBV8V2zDyu-wGMePtX0ETg3J56vpVp3UkE",
    authDomain: "wenovate-f9487.firebaseapp.com",
    projectId: "wenovate-f9487",
    storageBucket: "wenovate-f9487.appspot.com",
    messagingSenderId: "558350466008",
    appId: "1:558350466008:web:75c4fafa73878a1224d0ad"
  };

  if(location.hostname === 'localhost'){
    firebaseConfig ={
       authDomain:'http:localhost:9099?ns=wenovate-f9487',
       databaseURL:'http:localhost:9000?ns=wenovate-f9487',
       storageBucket:'http:localhost:9199?ns=wenovate-f9487',

    }
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const Auth = firebase.auth()
  const ProjectStoreage = firebase.storage()
  const ProjectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  export {Auth, ProjectStoreage , ProjectFirestore, timestamp}
