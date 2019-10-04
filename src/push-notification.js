import * as firebase from 'firebase/app';
import 'firebase/messaging';

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
    });
};

export const askForPermissioToReceiveNotifications = async () => {
    firebase.messaging().requestPermission().then(() => {
        const token = firebase.messaging().getToken();
        console.log('user token: ', token);
        return token;
    }).catch(error => {
        console.log('user has rejected permissions: ', error);
    });
};
