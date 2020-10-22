import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Bootstrap from "react-bootstrap";
import logo from './logo.png';
import '../App.css';

function NavBar() {
    return (
        <Bootstrap.Navbar bg="dark" variant="dark" expand="lg">
            <Bootstrap.Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
          Alcove
        </Bootstrap.Navbar.Brand>
            <Bootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Bootstrap.Navbar.Collapse id="basic-navbar-nav">
                <Bootstrap.Nav className="ml-auto">
                    <Bootstrap.Nav.Link href="#home">Home</Bootstrap.Nav.Link>                    
                    <Bootstrap.Nav.Link href="#link">About Us</Bootstrap.Nav.Link>
                    <Bootstrap.NavDropdown title="Account" id="basic-nav-dropdown" classname="DropCenter">
                        <Bootstrap.NavDropdown.Item href="#action/3.1" classname="DropCenter">Log In</Bootstrap.NavDropdown.Item>
                        <Bootstrap.NavDropdown.Divider />
                        <p classname="DropCenter">No account?</p>
                        <Bootstrap.NavDropdown.Item href="#action/3.4" classname="DropCenter">Sign Up</Bootstrap.NavDropdown.Item>
                    </Bootstrap.NavDropdown>
                </Bootstrap.Nav>
            </Bootstrap.Navbar.Collapse>
        </Bootstrap.Navbar>
    );
}

export default NavBar;