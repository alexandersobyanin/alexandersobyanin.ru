import React, {Component} from "react";
import './Notifications.css';
import icon from '../../assets/images/icon.png';
import {askForPermissioToReceiveNotifications} from '../../push-notification';


class Notifications extends Component {
    render() {
        return (
            <div>
                <p>Firebase Cloud Messaging</p>
                <img src={icon} alt="icon"/>
                <button onClick={askForPermissioToReceiveNotifications}>
                    Enable push notifications
                </button>
            </div>
        )
    }
}

export default Notifications