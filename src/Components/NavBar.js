import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Bootstrap from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import logo from './logo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import Verify from './LoggedInVerify';
import { ChangeTheme } from '../UseTheme';
import { LoginComponent } from './Login';

function NavBar(props) {
    const verify = Verify();
    const theme = ChangeTheme();
    const log = LoginComponent();
    const history = useHistory();

    function LogInHandle() {
        history.push('/login');
    }

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const ThemeHandler = () => {
        theme.changeMode();
    };

    return (
        <div className="">
            {props.children.location.loggedIn !== true ?
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

                            <Bootstrap.Button variant="dark" onClick={ThemeHandler}>
                                {theme.mode}
                            </Bootstrap.Button>

                            {props.children.location.loggedIn === true &&
                                <Bootstrap.Nav.Link href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </Bootstrap.Nav.Link>
                            }

                            <Bootstrap.Nav.Link href="https:www.google.com">Home</Bootstrap.Nav.Link>
                            <Bootstrap.Nav.Link href="https://www.google.com">About Us</Bootstrap.Nav.Link>
                            <Link to="/login">
                                <Bootstrap.Button>Sign In</Bootstrap.Button>
                            </Link>


                        </Bootstrap.Nav>
                    </Bootstrap.Navbar.Collapse>
                </Bootstrap.Navbar>
                :
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

                            {props.children.location.loggedIn === true &&
                                <Bootstrap.Nav.Link href="#">
                                    <Bootstrap.OverlayTrigger
                                    placement="bottom"
                                    overlay={<Bootstrap.Tooltip id="tooltip-disabled">Add a new Blog Post</Bootstrap.Tooltip>}>
                                        <span className="d-inline-block">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </span>
                                    </Bootstrap.OverlayTrigger>
                                </Bootstrap.Nav.Link>
                            }

                            <Bootstrap.Nav.Link href="#home">Home</Bootstrap.Nav.Link>
                            <Bootstrap.Nav.Link href="#link">About Us</Bootstrap.Nav.Link>
                            <div ref={ref}>
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                </svg>
                                <Bootstrap.Overlay
                                    show={show}
                                    target={target}
                                    placement="bottom"
                                    container={ref.current}
                                    containerPadding={20}
                                >
                                    <Bootstrap.Popover id="popover-contained">
                                        <Bootstrap.Popover.Title as="h3">Hello, {props.children.location.userName}</Bootstrap.Popover.Title>
                                        <Bootstrap.Popover.Content>
                                            <p>
                                                Thank You for joining us...
                                            </p>
                                            <p>
                                                Do not hesitate to <a href="mailto:joshuafosu119@gmail.com">Contact</a> us
                                            </p>
                                        </Bootstrap.Popover.Content>
                                    </Bootstrap.Popover>
                                </Bootstrap.Overlay>
                            </div>

                        </Bootstrap.Nav>
                    </Bootstrap.Navbar.Collapse>
                </Bootstrap.Navbar>

            }

        </div>
    );
}

export default NavBar;