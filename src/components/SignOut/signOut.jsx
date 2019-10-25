import React from 'react';
import {Button} from "reactstrap";
import {FiLogOut as IconSignOut} from 'react-icons/fi';

import {withFirebase} from '../Firebase';
import TextIcon from "../TextIcon";

const SignOutButton = ({firebase}) => (
    <Button onClick={firebase.doSignOut}>
        <TextIcon IconComponent={IconSignOut} title="Sign Out" titleClassName="d-none d-sm-inline"/>
    </Button>
);

export default withFirebase(SignOutButton);
