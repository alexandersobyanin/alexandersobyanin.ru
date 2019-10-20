import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import {YMInitializer} from "react-yandex-metrika";
import ReactGA from 'react-ga';

import ErrorBoundary from "../ErrorBoundary";
import {withAuthentication} from '../Session';
import FourOhFour from "../FourOhFour";
import Header from '../Header';
import Footer from "../Footer";
import LandingPage from '../Landing';
import HomePage from '../Home';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
    <ErrorBoundary>
        <Container>
            <Router basename={process.env.PUBLIC_URL}>
                <Header/>
                <Container role="main" tag="main" className="mx-md-5 my-md-2">
                    <Switch>
                        <Route exact strict path="/:url*"
                               render={props => <Redirect to={`${props.location.pathname}/`}/>}
                        />
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
                        <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
                        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                        <Route exact path={ROUTES.HOME} component={HomePage}/>
                        <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/>
                        <Route exact path={ROUTES.ADMIN} component={AdminPage}/>
                        <Route component={FourOhFour}/>
                    </Switch>
                </Container>
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
        </Container>
    </ErrorBoundary>
);

export default withAuthentication(App);
