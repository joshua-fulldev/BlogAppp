import React, {useSate} from 'react';
import {useHistory} from 'react-router-dom';
import * as Bootstrap from 'react-bootstrap';
import Verify from './LoggedInVerify';
import bases from '../database.json';

function LoginComponent() {
    const history = useHistory();
    const verify = Verify();
    
    function HandleSubmit(event) {
        event.preventDefault();
        verify.setLoggedIn();
        history.push('/home');
        console.log("Hello");
    }
    

    return (
        <div className="LoginPage">
            <div className="MainLog">
                <h1>Log In</h1>
                <Bootstrap.Form>
                    <Bootstrap.Form.Group controlId="formBasicEmail">
                        <Bootstrap.Form.Label>Username</Bootstrap.Form.Label>
                        <Bootstrap.Form.Control type="text" placeholder="Type username..." />
                        <Bootstrap.Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Bootstrap.Form.Text>
                    </Bootstrap.Form.Group>

                    <Bootstrap.Form.Group controlId="formBasicPassword">
                        <Bootstrap.Form.Label>Password</Bootstrap.Form.Label>
                        <Bootstrap.Form.Control type="password" placeholder="Password" />
                    </Bootstrap.Form.Group>
                    <Bootstrap.Form.Group controlId="formBasicCheckbox">
                        <Bootstrap.Form.Check type="checkbox" label="Keep Me Signed In" />
                    </Bootstrap.Form.Group>
                    <Bootstrap.Button variant="primary" type="submit" onClick={HandleSubmit}>
                        Submit
  </Bootstrap.Button>
                </Bootstrap.Form>
            </div>
        </div>
    );
}

export default LoginComponent;