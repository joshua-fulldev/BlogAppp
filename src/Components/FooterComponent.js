import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import logo from './logo.png';
import * as Bootstrap from 'react-bootstrap';

function FooterComponent() {
    return (
        <>
        <footer className="RealFooter">
            <div className="FColumn">
                <p>
                <img src={logo}
                    width="50px"
                    height="50px"
                    alt="" />
                </p>

                <a href="https://www.google.com" className="FooterLink"><p>Want More From Alcove</p></a>
                <a href="https://www.google.com" className="FooterLink"><p>Sign Up to Our NewsLetter</p></a>

                <Bootstrap.Form>
                    <Bootstrap.Form.Group controlId="formBasicEmail">
                        <Bootstrap.Form.Label>Email address</Bootstrap.Form.Label>
                        <Bootstrap.Form.Control type="email" placeholder="Enter email" />
                        <Bootstrap.Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Bootstrap.Form.Text>
                    </Bootstrap.Form.Group>

                    
                    <Bootstrap.Button variant="primary" type="submit">
                        Submit
  </Bootstrap.Button>
                </Bootstrap.Form>

                <p>
                    &#160; Alcove
                </p>

            </div>
            <div className="SColumn">
                <ul className="IntoS">
                    <a href="https://www.google.com" className="FooterLink"><li>About</li></a>
                    <a href="https://www.google.com" className="FooterLink"><li>Contact</li></a>
                    <a href="https://www.google.com" className="FooterLink"><li>Newsletter</li></a>
                    <a href="https://www.google.com" className="FooterLink"><li>Privacy Policy</li></a>
                    <a href="https://www.google.com" className="FooterLink"><li>About</li></a>
                    <a href="https://www.google.com" className="FooterLink"><li>Contact</li></a>
                </ul>

            </div>

        </footer>
        </>
    )
}

export default FooterComponent;