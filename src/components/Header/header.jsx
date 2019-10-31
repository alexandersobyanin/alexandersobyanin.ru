import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Collapse, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";

import Navigation from "../Navigation/navigation";
import * as ROUTES from "../../constants/routes";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar expand="md" color="dark" dark className="bg-primary">
            <NavbarBrand tag={Link} to={ROUTES.HOME}>
                <span className="h3">
                    <span className="d-none d-sm-inline">Alexander </span>
                    Sobyanin
                </span>
                <span className="d-none d-sm-inline">{' '}</span>
                <span className="h3 text-muted d-none d-sm-inline">Personal Page</span>
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
