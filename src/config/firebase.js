import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTxlqzzr5gGVibO5QNmU9QIy17hp1UA54',
  authDomain: 'paletty.firebaseapp.com',
  databaseURL: 'https://paletty.firebaseio.com',
  projectId: 'paletty',
  storageBucket: 'paletty.appspot.com',
  messagingSenderId: '695569345258',
  appId: '1:695569345258:web:ec370e8d3b248a7b65c593',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const googleAuth = async () => {
  try {
    const result = await auth.signInWithPopup(googleProvider);
    const user = result.user;
    console.log(user);
  } catch (error) {
    var errorMessage = error.message;
    alert(errorMessage);
  }
};

export { firestore, timestamp, auth, googleAuth };
