import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYpr4Lq2HzcjC_AST3yWf-XFzq02OFiXI",
  authDomain: "twitter-clone-b1a5d.firebaseapp.com",
  projectId: "twitter-clone-b1a5d",
  storageBucket: "twitter-clone-b1a5d.appspot.com",
  messagingSenderId: "268610830870",
  appId: "1:268610830870:web:e04618b0af8cb56623eb37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db

