import React from 'react';
import {Button} from "reactstrap";
import {FiLogOut as IconSignOut} from 'react-icons/fi';

import {withFirebase} from '../Firebase';

const SignOutButton = ({firebase}) => (
    <Button onClick={firebase.doSignOut}>
        <IconSignOut title="Sign Out"/><span className="d-none d-sm-inline"> Sign Out</span>
    </Button>
);

export default withFirebase(SignOutButton);
