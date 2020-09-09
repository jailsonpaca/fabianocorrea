import * as firebase from 'firebase/app'
import 'firebase/firestore';
//import "firebase/auth";

const config={
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    databaseURL: process.env.NEXT_PUBLIC_databaseURL,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId,
    measurementId:process.env.NEXT_PUBLIC_measurementId
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
//export const auth = firebaseApp.auth();
export const db = firebase.firestore();


