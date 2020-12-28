import React, {Component} from 'react';
import {Button} from "reactstrap";

import {withFirebase} from '../Firebase';

class UserItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: null,
            ...props.location.state,
        };
    }

    componentDidMount() {
        if (this.state.user) {
            return;
        }

        this.setState({loading: true});

        this.props.firebase
            .user(this.props.match.params.id)
            .on('value', snapshot => {
                this.setState({
                    user: snapshot.val(),
                    loading: false,
                });
            });
    }

    componentWillUnmount() {
        this.props.firebase.user(this.props.match.params.id).off();
    }

    onSendPasswordResetEmail = () => {
        this.props.firebase.doPasswordReset(this.state.user.email);
    };

    render() {
        const {user, loading} = this.state;

        return (
            <div>
                <h2>User</h2>
                {loading && <div>Loading ...</div>}
                {user && (
                    <div>
                        <span>
                            <strong>ID:</strong> {user.uid}
                        </span>
                        <br/>
                        <span>
                            <strong>E-Mail:</strong> {user.email}
                        </span>
                        <br/>
                        <span>
                            <strong>Username:</strong> {user.username}
                        </span>
                        <br/>
                        <span>
                            <Button onClick={this.onSendPasswordResetEmail}>Send Password Reset</Button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default withFirebase(UserItem);
