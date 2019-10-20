import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {Alert, Button, ButtonToolbar, Form, Input, InputGroup} from "reactstrap";

import {withFirebase} from '../Firebase';
import {SignUpLink} from '../SignUp';
import {PasswordForgetLink} from '../PasswordForget';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <Fragment>
        <h1>SignIn</h1>
        <SignInForm/>
        <ButtonToolbar className="my-2">
            <SignInGoogle/>
            <SignInFacebook/>
            <SignInTwitter/>
        </ButtonToolbar>
        <PasswordForgetLink/>
        <SignUpLink/>
    </Fragment>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
    'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
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
        const {email, password, error} = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <InputGroup>
                    <Input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="email"
                        placeholder="Email Address"
                    />
                    <Input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <Button disabled={isInvalid} type="submit">
                        Sign In
                    </Button>
                </InputGroup>

                {error && <Alert className="alert-danger">{error.message}</Alert>}
            </Form>
        );
    }
}

class SignInGoogleBase extends Component {
    constructor(props) {
        super(props);

        this.state = {error: null};
    }

    onSubmit = event => {
        this.props.firebase
            .doSignInWithGoogle()
            .then(socialAuthUser => {
                // Create a user in your Firebase Realtime Database too
                return this.props.firebase.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.user.displayName,
                    email: socialAuthUser.user.email,
                    roles: {},
                });
            })
            .then(() => {
                this.setState({error: null});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({error});
            });

        event.preventDefault();
    };

    render() {
        const {error} = this.state;

        return (
            <Form onSubmit={this.onSubmit} className="mr-2">
                <Button type="submit">Sign In with Google</Button>

                {error && <Alert className="alert-danger">{error.message}</Alert>}
            </Form>
        );
    }
}

class SignInFacebookBase extends Component {
    constructor(props) {
        super(props);

        this.state = {error: null};
    }

    onSubmit = event => {
        this.props.firebase
            .doSignInWithFacebook()
            .then(socialAuthUser => {
                // Create a user in your Firebase Realtime Database too
                return this.props.firebase.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.additionalUserInfo.profile.name,
                    email: socialAuthUser.additionalUserInfo.profile.email,
                    roles: {},
                });
            })
            .then(() => {
                this.setState({error: null});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({error});
            });

        event.preventDefault();
    };

    render() {
        const {error} = this.state;

        return (
            <Form onSubmit={this.onSubmit} className="mr-2">
                <Button type="submit">Sign In with Facebook</Button>

                {error && <Alert className="alert-danger">{error.message}</Alert>}
            </Form>
        );
    }
}

class SignInTwitterBase extends Component {
    constructor(props) {
        super(props);

        this.state = {error: null};
    }

    onSubmit = event => {
        this.props.firebase
            .doSignInWithTwitter()
            .then(socialAuthUser => {
                // Create a user in your Firebase Realtime Database too
                return this.props.firebase.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.additionalUserInfo.profile.name,
                    email: socialAuthUser.additionalUserInfo.profile.email,
                    roles: {},
                });
            })
            .then(() => {
                this.setState({error: null});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({error});
            });

        event.preventDefault();
    };

    render() {
        const {error} = this.state;

        return (
            <Form onSubmit={this.onSubmit} className="mr-2">
                <Button type="submit">Sign In with Twitter</Button>

                {error && <Alert className="alert-danger">{error.message}</Alert>}
            </Form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
    withRouter,
    withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
    withRouter,
    withFirebase,
)(SignInFacebookBase);

const SignInTwitter = compose(
    withRouter,
    withFirebase,
)(SignInTwitterBase);

export default SignInPage;

export {SignInForm, SignInGoogle, SignInFacebook, SignInTwitter};
