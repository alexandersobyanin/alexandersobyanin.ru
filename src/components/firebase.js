import firebase from 'firebase/app';
import '@firebase/messaging';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
    databaseURL: "https://" + process.env.REACT_APP_FIREBASE_PROJECT_ID + ".firebaseio.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID + ".appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_API_ID
});

let messaging;

if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
    messaging.usePublicVapidKey(process.env.REACT_APP_FIREBASE_PUBLIC_VAPID_KEY);
}

export {messaging};