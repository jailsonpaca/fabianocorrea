import * as firebase from 'firebase/app'
import 'firebase/firestore';
//import "firebase/auth";

const config={
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId:process.env.measurementId
};
 

if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
//export const auth = firebaseApp.auth();
export const db = firebase.firestore();


