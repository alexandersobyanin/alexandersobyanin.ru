import React from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import {Nav, NavItem, NavLink} from "reactstrap";
import {
    FiHome as IconHome,
    FiMessageSquare as IconChat,
    FiCodepen as IconProject,
    FiList as IconLists,
    FiUser as IconAccount,
    FiAlertTriangle as IconAdmin,
    FiLogIn as IconSignIn
} from 'react-icons/fi';

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
            <NavLink exact to={ROUTES.HOME} tag={RRNavLink}>
                <IconHome title="Home"/><span className="d-none d-sm-inline"> Home</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.CHAT} tag={RRNavLink}>
                <IconChat title="Chat"/><span className="d-none d-sm-inline"> Chat</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.PROJECTS}>
                <IconProject title="Projects"/><span className="d-none d-sm-inline"> Projects</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.LISTS}>
                <IconLists title="Lists"/><span className="d-none d-sm-inline"> Lists</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.ACCOUNT} tag={RRNavLink}>
                <IconAccount title="Account"/><span className="d-none d-sm-inline"> Account</span>
            </NavLink>
        </NavItem>
        {!!authUser.roles[ROLES.ADMIN] && (
            <NavItem>
                <NavLink to={ROUTES.ADMIN} tag={RRNavLink}>
                    <IconAdmin title="Admin"/><span className="d-none d-sm-inline"> Admin</span>
                </NavLink>
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
            <NavLink exact to={ROUTES.HOME} tag={RRNavLink}>
                <IconHome title="Home"/><span className="d-none d-sm-inline"> Home</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.PROJECTS}>
                <IconProject title="Projects"/><span className="d-none d-sm-inline"> Projects</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.SIGN_IN} tag={RRNavLink}>
                <IconSignIn title="Sign In"/><span className="d-none d-sm-inline"> Sign In</span>
            </NavLink>
        </NavItem>
    </Nav>
);

export default Navigation;
