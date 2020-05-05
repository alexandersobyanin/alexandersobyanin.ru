import React from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import {Nav, NavItem, NavLink} from "reactstrap";
import {
    FiHome as IconHome,
    FiMessageSquare as IconChat,
    FiExternalLink as IconProfile,
    FiCodepen as IconProject,
    FiList as IconLists,
    FiUser as IconAccount,
    FiAlertTriangle as IconAdmin,
    FiDollarSign as IconAdvertisment,
    FiLogIn as IconSignIn
} from 'react-icons/fi';

import {AuthUserContext} from '../Session';
import SignOutButton from '../SignOut';
import TextIcon from '../TextIcon';
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
                <TextIcon IconComponent={IconHome} title="Home" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.PROFILES} tag={RRNavLink}>
                <TextIcon IconComponent={IconProfile} title="Profiles" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.CHAT} tag={RRNavLink}>
                <TextIcon IconComponent={IconChat} title="Chat" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.PROJECTS}>
                <TextIcon IconComponent={IconProject} title="Projects" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.LISTS}>
                <TextIcon IconComponent={IconLists} title="Lists" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.ACCOUNT} tag={RRNavLink}>
                <TextIcon IconComponent={IconAccount} title="Account" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        {!!authUser.roles[ROLES.ADMIN] && (
            <NavItem>
                <NavLink to={ROUTES.ADMIN} tag={RRNavLink}>
                    <TextIcon IconComponent={IconAdmin} title="Admin" titleClassName="d-none d-sm-inline"/>
                </NavLink>
            </NavItem>
        )}
        <NavItem>
            <NavLink to={ROUTES.ADVERTISMENT} tag={RRNavLink}>
                <TextIcon IconComponent={IconAdvertisment} title="Advertisment" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        <NavItem>
            <SignOutButton/>
        </NavItem>
    </Nav>
);

const NavigationNonAuth = () => (
    <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink exact to={ROUTES.HOME} tag={RRNavLink}>
                <TextIcon IconComponent={IconHome} title="Home" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={ROUTES.PROJECTS}>
                <TextIcon IconComponent={IconProject} title="Projects" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={ROUTES.SIGN_IN} tag={RRNavLink}>
                <TextIcon IconComponent={IconSignIn} title="Sign In" titleClassName="d-none d-sm-inline"/>
            </NavLink>
        </NavItem>
    </Nav>
);

export default Navigation;
