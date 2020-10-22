import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Bootstrap from "react-bootstrap";
import logo from './logo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import Verify from './LoggedInVerify';

function NavBar() {
    const verify = Verify();

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
                    {
                        verify.userLoggedIn === false &&
                        <Bootstrap.Nav.Link href="#">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </Bootstrap.Nav.Link>
                    }
                    <Bootstrap.Nav.Link href="#home">Home</Bootstrap.Nav.Link>
                    <Bootstrap.Nav.Link href="#link">About Us</Bootstrap.Nav.Link>
                    {}
                    <Bootstrap.NavDropdown title="Account" id="basic-nav-dropdown" classname="DropCenter">
                        <Link to="/login">
                            <Bootstrap.NavDropdown.Item href="#login" classname="DropCenter">Log In</Bootstrap.NavDropdown.Item>
                        </Link>
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