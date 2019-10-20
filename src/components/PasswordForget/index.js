import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Alert, Button, Form, FormGroup, Input} from "reactstrap";

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
    <Fragment>
        <h1>PasswordForget</h1>
        <PasswordForgetForm/>
    </Fragment>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, error} = this.state;

        const isInvalid = email === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Input name="email" value={this.state.email} onChange={this.onChange}
                           type="email" placeholder="Email Address"/>
                </FormGroup>
                <Button disabled={isInvalid} type="submit">
                    Reset My Password
                </Button>

                {error && <Alert className="alert-danger">{error.message}</Alert>}
            </Form>
        );
    }
}

const PasswordForgetLink = () => (
    <Fragment>
        <Button tag={Link} to={ROUTES.PASSWORD_FORGET} outline>Forgot Password?</Button>
    </Fragment>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export {PasswordForgetForm, PasswordForgetLink};
