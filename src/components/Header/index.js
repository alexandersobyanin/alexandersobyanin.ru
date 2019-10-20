import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Collapse, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";

import Navigation from "../Navigation";
import * as ROUTES from "../../constants/routes";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar expand="md" color="dark" dark className="bg-primary">
            <NavbarBrand tag={Link} to={ROUTES.LANDING}>
                <span className="h3">Alexander Sobyanin</span>
                <span>{' '}</span>
                <span className="h3 text-muted">Personal Page</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Navigation/>
            </Collapse>
        </Navbar>
    )
};

const Header = () => (
    <header>
        <NavigationBar/>
    </header>
);

export default Header;
