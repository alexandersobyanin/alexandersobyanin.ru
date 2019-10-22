import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import {YMInitializer} from "react-yandex-metrika";
import ReactGA from 'react-ga';

import {withAuthentication} from '../Session';
import FourOhFour from "../FourOhFour/fourOhFour";
import Header from '../Header/header';
import Footer from "../Footer/footer";
import LandingPage from '../Landing/landing';
import HomePage from '../Home/home';
import SignUpPage from '../SignUp/signUp';
import SignInPage from '../SignIn/signIn';
import PasswordForgetPage from '../PasswordForget/passwordForget';
import AccountPage from '../Account/account';
import AdminPage from '../Admin/admin';
import * as ROUTES from '../../constants/routes';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

function logPageView() {
    ReactGA.set({page: window.location.pathname + window.location.search});
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => (
    <Container>
        <Router basename={process.env.PUBLIC_URL} onUpdate={logPageView}>
            <Header/>
            <Container role="main" tag="main" className="mx-md-5 my-md-2">
                <Switch>
                    <Route exact strict path="/:url*"
                           render={props => <Redirect to={`${props.location.pathname}/`}/>}
                    />
                    <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                    <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                    <Route path={ROUTES.HOME} component={HomePage}/>
                    <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                    <Route path={ROUTES.ADMIN} component={AdminPage}/>
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
);

export default withAuthentication(App);
