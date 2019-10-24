import React, {Fragment} from 'react';
import {compose} from 'recompose';

import {withAuthorization, withEmailVerification} from '../Session';
import Messages from '../Messages';

const ChatPage = () => (
    <Fragment>
        <h1>Chat Page</h1>
        <p>The Chat Page is accessible by every signed in user.</p>

        <Messages/>
    </Fragment>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(ChatPage);
