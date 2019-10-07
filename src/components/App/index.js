import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {YMInitializer} from "react-yandex-metrika";
import ReactGA from 'react-ga';
import ErrorBoundary from "../ErrorBoundary";
import Navigation from '../Navigation';
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
        <Router>
            {/* TODO: extract header */}
            <header>
                <h2>Alexander Sobyanin</h2>
                <h3>Personal Page</h3>
            </header>
            <main>
                <Navigation/>
                <hr/>
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                <Route path={ROUTES.HOME} component={HomePage}/>
                <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                <Route path={ROUTES.ADMIN} component={AdminPage}/>
            </main>
            {/* TODO: extract footer */}
            <footer>
                <p>
                    &copy;&nbsp;2019&nbsp;by&nbsp;
                    <a href="//about.me/sobyanin" target="_blank" rel="noopener noreferrer">
                        Alexander&nbsp;Sobyanin
                    </a>
                </p>
                <p className="copyrights">
                    Some icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
                    {' '}from{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    {' '}is licensed by{' '}
                    <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">
                        CC 3.0 BY
                    </a>
                </p>
            </footer>
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
