import * as firebase from 'firebase/app';
import 'firebase/messaging';

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
    });

    // use other service worker
    // navigator.serviceWorker
    //   .register('/my-sw.js')
    //   .then((registration) => {
    //     firebase.messaging().useServiceWorker(registration);
    //   });
};

export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('user token: ', token);
        return token;
    } catch (error) {
        console.error(error);
    }
};
