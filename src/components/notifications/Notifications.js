import React, {Component} from "react";
import './Notifications.css';
import {messaging} from "../firebase";

class Notifications extends Component {
    render() {
        let token = messaging.getToken();
        return (
            <div>
                <h1>React + Firebase Cloud Messaging (Push Notifications)</h1>
                <div>
                    Current token is: <p>{token}</p>
                </div>
            </div>
        )
    }
}

export default Notifications