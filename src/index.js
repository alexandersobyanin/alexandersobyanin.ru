import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from '@sentry/browser'
import * as serviceWorker from './serviceWorker';
import App from './components/App';

Sentry.init({
    debug: true,
    dsn: "https://ff74083e89b442f792d44661e2f498c7@sentry.io/1269741",
    release: process.env.REACT_APP_NAME+"@"+process.env.REACT_APP_VERSION,

});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();