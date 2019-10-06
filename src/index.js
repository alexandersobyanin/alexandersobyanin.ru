import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, {FirebaseContext} from './components/Firebase';
import * as Sentry from '@sentry/browser'


Sentry.init({
    debug: false,
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: process.env.REACT_APP_NAME + "@" + process.env.REACT_APP_VERSION,

});

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App/>
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
