import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser'

import './custom.scss';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from "./components/ErrorBoundary";
import Firebase, {FirebaseContext} from './components/Firebase';
import App from './components/App';

Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_NAME + "@" + process.env.REACT_APP_VERSION,
    debug: false
});

ReactDOM.render(
    <ErrorBoundary>
        <FirebaseContext.Provider value={new Firebase()}>
            <App/>
        </FirebaseContext.Provider>
    </ErrorBoundary>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
