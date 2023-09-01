import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDze8o00MCSSnMMTonk-_WWoCEaXtz1a4w",
  authDomain: "tarefas-da6d9.firebaseapp.com",
  projectId: "tarefas-da6d9",
  storageBucket: "tarefas-da6d9.appspot.com",
  messagingSenderId: "463932437722",
  appId: "1:463932437722:web:62992623c5e16ee53821e3"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;