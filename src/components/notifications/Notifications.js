import React, {Component} from "react";
import './Notifications.css';
import {messaging} from "../firebase";

class Notifications extends Component {
    render() {
        const renderNotification = (notification, i) => <li key={i}>{notification}</li>;
        let token = messaging.getToken();
        let notifications = [{"id": "123"}, {"id": "234"}];
        return (
            <div>
                <h1>React + Firebase Cloud Messaging (Push Notifications)</h1>
                <div>
                    Current token is: <p>{token}</p>
                </div>
                <ul>
                    Notifications List:
                    {notifications.map(renderNotification)}
                </ul>
            </div>
        )
    }
}

export default Notifications