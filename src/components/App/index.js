import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {YMInitializer} from "react-yandex-metrika";
import ReactGA from 'react-ga';
import ErrorBoundary from "../ErrorBoundary";
import Header from '../Header';
import Footer from "../Footer";
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import './style.css';
import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../Session';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
    <ErrorBoundary>
        <Router basename={process.env.PUBLIC_URL}>
            <Header/>
            <main>
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                <Route path={ROUTES.HOME} component={HomePage}/>
                <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                <Route path={ROUTES.ADMIN} component={AdminPage}/>
            </main>
            <Footer/>
            <YMInitializer
                accounts={[Number(process.env.REACT_APP_YANDEX_METRIKA)]}
                options={{
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                    trackHash: true,
                }}
            />
        </Router>
    </ErrorBoundary>
);

export default withAuthentication(App);
