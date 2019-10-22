import React from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import {Nav, NavItem, NavLink} from "reactstrap";

import {AuthUserContext} from '../Session';
import SignOutButton from '../SignOut';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
                <NavigationAuth authUser={authUser}/>
            ) : (
                <NavigationNonAuth/>
            )
        }
    </AuthUserContext.Consumer>
);

const NavigationAuth = ({authUser}) => (
    <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink exact to={ROUTES.LANDING} tag={RRNavLink}>Landing</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.HOME} tag={RRNavLink}>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.PROJECTS}>Projects</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.LISTS}>Lists</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.ACCOUNT} tag={RRNavLink}>Account</NavLink>
        </NavItem>
        {!!authUser.roles[ROLES.ADMIN] && (
            <NavItem>
                <NavLink to={ROUTES.ADMIN} tag={RRNavLink}>Admin</NavLink>
            </NavItem>
        )}
        <NavItem>
            <SignOutButton/>
        </NavItem>
    </Nav>
);

const NavigationNonAuth = () => (
    <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink exact to={ROUTES.LANDING} tag={RRNavLink}>Landing</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.PROJECTS}>Projects</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.SIGN_IN} tag={RRNavLink}>Sign In</NavLink>
        </NavItem>
    </Nav>
);

export default Navigation;
