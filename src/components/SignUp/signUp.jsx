import React, {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Alert, Button, CustomInput, Form, FormGroup, Input} from "reactstrap";
import {compose} from 'recompose';

import {withFirebase} from '../Firebase';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <Fragment>
        <h1>SignUp</h1>
        <SignUpForm/>
    </Fragment>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {username, email, passwordOne, isAdmin} = this.state;
        const roles = {};

        // Отключил регистрацию администратором
        if (false && isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set({
                    username,
                    email,
                    roles,
                });
            })
            .then(() => {
                return this.props.firebase.doSendEmailVerification();
            })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.ACCOUNT);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    onChangeCheckbox = event => {
        this.setState({[event.target.name]: event.target.checked});
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            isAdmin,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Input
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                    />
                    <Input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="email"
                        placeholder="Email Address"
                    />
                    <Input
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <Input
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label="Admin"
                        id="isAdmin"
                        name="isAdmin"
                        type="switch"
                        checked={isAdmin}
                        onChange={this.onChangeCheckbox}
                    />
                </FormGroup>
                <Button disabled={isInvalid} type="submit" color="primary">
                    Sign Up
                </Button>

                {error && <Alert className="alert-danger">{error.message}</Alert>}
            </Form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Button tag={Link} to={ROUTES.SIGN_UP}>Sign Up</Button>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export {SignUpForm, SignUpLink};
