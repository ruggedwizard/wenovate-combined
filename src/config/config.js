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
  
  

  // console.log(location.hostname)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth()
  const projectStoreage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  // eslint-disable-next-line no-restricted-globals
  if(location.hostname === 'localhost'){
    projectFirestore.useEmulator('localhost',8080)
    auth.useEmulator('http://localhost:9099',{disableWarnings:true})
  }
  
export default firebase
export {auth, projectFirestore, projectStoreage}