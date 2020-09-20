import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import authIsReady from 'react-redux-firebase';

var config  = {
  apiKey: "AIzaSyATYgVXI21Mhps462rafGy4jfIVZ6I0Dj0",
  authDomain: "crwn-db-2c4aa.firebaseapp.com",
  databaseURL: "https://crwn-db-2c4aa.firebaseio.com",
  projectId: "crwn-db-2c4aa",
  storageBucket: "crwn-db-2c4aa.appspot.com",
  messagingSenderId: "701302998600",
  appId: "1:701302998600:web:0adad97009933de8587a7d",
  measurementId: "G-YPZQ7HHB7H"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase 