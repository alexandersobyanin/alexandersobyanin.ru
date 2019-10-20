import React, {Fragment} from 'react';
import {compose} from 'recompose';

import {withAuthorization, withEmailVerification} from '../Session';
import Messages from '../Messages';

const HomePage = () => (
    <Fragment>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        <Messages/>
    </Fragment>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(HomePage);
