import * as firebase from 'firebase/app';
import 'firebase/messaging';

export const initializeFirebase = () => {
    firebase.initializeApp({
        projectId: "b1oki-homepage",
        messagingSenderId: "29590635953"
    });
};

export const askForPermissioToReceiveNotifications = async () => {
    console.log('Requesting messaging permission');
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey("BC5iFJKADo-XFlYbbgV8UAu4cDTfzfyZxr5lBxeJBDItFv1m7TchiWbYMgeJJMKNFPxNahtLtg1nNdgdgR1yW4c");
    messaging.requestPermission().then(() => {
        if (Notification.permission === 'granted') {
            console.log('user has granted permissions');
            messaging.onTokenRefresh(token => {
                console.log('onTokenRefresh token: ', token);
            });
        } else {
            console.log('user has rejected permissions');
        }
    }).catch(error => {
        console.error('requestPermission error: ', error);
    });
};
