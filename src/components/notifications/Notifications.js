import React, {Component} from "react";
import './Notifications.css';

class Notifications extends Component {
    render() {
        return (
            <div>
                <p>Firebase Cloud Messaging</p>
                <button onClick="">
                    Enable push notifications
                </button>
            </div>
        )
    }
}

export default Notifications