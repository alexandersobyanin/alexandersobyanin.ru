import React, {Component} from "react";
import './Notifications.css';
import {askForPermissioToReceiveNotifications} from '../../push-notification';


class Notifications extends Component {
    render() {
        return (
            <div>
                <p>Firebase Cloud Messaging</p>
                <button onClick={askForPermissioToReceiveNotifications}>
                    Enable push notifications
                </button>
            </div>
        )
    }
}

export default Notifications
