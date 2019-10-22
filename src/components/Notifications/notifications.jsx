import React from "react";
import 'firebase/messaging';
import * as firebase from 'firebase/app';
import {Button} from "reactstrap";

const askForPermissioToReceiveNotifications = async () => {
    console.log('Requesting messaging permission');
    const messaging = firebase.messaging();
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('user has granted permissions');
            console.log('use vapid key');
            messaging.usePublicVapidKey("BC5iFJKADo-XFlYbbgV8UAu4cDTfzfyZxr5lBxeJBDItFv1m7TchiWbYMgeJJMKNFPxNahtLtg1nNdgdgR1yW4c");
            console.log('used vapid key');
            messaging.getToken().then((refreshedToken) => {
                console.log('Token refreshed: ', refreshedToken);
                // Indicate that the new Instance ID token has not yet been sent to the app server.
                // Send Instance ID token to app server.
                console.log('getToken finish');
            }).catch((err) => {
                console.log('Unable to retrieve refreshed token ', err);
            });
            console.log('after getToken');
        } else {
            console.log('user has rejected permissions');
        }
    }).catch(function (error) {
        console.log("Unable to get permission to notify: ", error);
    });
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
};

const Notifications = () => (
    <div>
        <h2>Firebase Cloud Messaging</h2>
        <Button onClick={askForPermissioToReceiveNotifications}>
            Enable push notifications
        </Button>
    </div>
);

export default Notifications