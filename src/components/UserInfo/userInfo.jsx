import React, {Component} from 'react';
import {Alert, Button, Form, Input} from "reactstrap";

import {withFirebase} from "../Firebase";

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editEmail: this.props.authUser.email || '',
            editUsername: this.props.authUser.username || '',
            error: null,
        };
    }

    onSubmit = event => {
        const {editEmail, editUsername} = this.state;

        // TODO FEAT: show processed and success
        // TODO FIX: data not save :'(

        if (editEmail && this.props.authUser.email !== editEmail) {
            this.props.firebase.auth.currentUser
                .updateEmail(editEmail)
                .catch(error => {
                    this.setState({error});
                });
        }

        if (editUsername && this.props.authUser.username !== editUsername) {
            this.props.firebase.auth.currentUser
                .updateProfile({displayName: editUsername})
                .catch(error => {
                    console.error(error);
                    this.setState({error});
                });
        }

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {editEmail, editUsername, error} = this.state;

        const isInvalid = editEmail === '' || editUsername === '';

        return (
            <Form onSubmit={this.onSubmit} inline>
                <Input name="editEmail" value={editEmail} onChange={this.onChange}
                       type="email" placeholder="user@example.com" className="mr-2"/>
                <Input name="editUsername" value={editUsername} onChange={this.onChange}
                       type="text" placeholder="username" className="mr-2"/>
                <Button disabled={isInvalid} type="submit">
                    Save
                </Button>

                {error && <Alert className="alert-danger">{error.message}</Alert>}
            </Form>
        );
    }
}

export default withFirebase(UserInfo);
