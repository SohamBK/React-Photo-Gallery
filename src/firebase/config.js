import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCKfogpHe8timGAhUQ6d5HMxxdf7HulIgM",
  authDomain: "photo-gallery-76118.firebaseapp.com",
  projectId: "photo-gallery-76118",
  storageBucket: "photo-gallery-76118.appspot.com",
  messagingSenderId: "16926195764",
  appId: "1:16926195764:web:b2211d6f2df37a5a770a61"

};


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };