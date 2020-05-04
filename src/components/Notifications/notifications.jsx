import React, {Component} from "react";
import {Button} from "reactstrap";
import 'firebase/messaging';
import * as firebase from 'firebase/app';

import {withFirebase} from "../Firebase";

class Notifications extends Component {
    vapidKey = process.env.REACT_APP_FIREBASE_PUBLIC_VAPID_KEY;

    askForPermissioToReceiveNotifications = async () => {
        console.log('Requesting messaging permission');
        const messaging = firebase.messaging();
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('user has granted permissions');
                console.log('use vapid key');
                messaging.usePublicVapidKey(this.vapidKey);
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
    }

    render() {
        return (
            <div>
                <h2>Firebase Cloud Messaging</h2>
                <Button onClick={this.askForPermissioToReceiveNotifications}>
                    Enable push notifications
                </Button>
            </div>
        );
    }
}

export default withFirebase(Notifications);