import React, {Component} from "react";
import './style.css';
import {askForPermissioToReceiveNotifications} from './push-notification';


class Index extends Component {
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

export default Index
