import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Bootstrap from 'react-bootstrap';
import Verify from './LoggedInVerify';
import bases from '../database.json';

function LoginComponent() {
    const history = useHistory();
    const verify = Verify();
    const [loggedIn, setLoggedIn] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function SetLoggedIn() {
        setLoggedIn(true);
    }

    function HandleSubmit(event) {
        event.preventDefault();
        verify.setLoggedIn();
        const user = bases.find((data) => (data.username) === userName);

        const userPass = bases.find((data) => data.password === password);

        if (user) {
            setLoggedIn(true);
            console.log(user);
            history.push({
                pathname: "/home",
                loggedIn: loggedIn,
                userName: userName,
            });
            console.log("Hello");
        }
    }

    function HandleUsername(event) {
        setUserName(event.target.value);
    }

    function HandleUserPassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="LoginPage">
            <div className="MainLog">
                <h1>Log In</h1>
                <Bootstrap.Form onSubmit={HandleSubmit}>
                    <Bootstrap.Form.Group controlId="formBasicEmail">
                        <Bootstrap.Form.Label>Username</Bootstrap.Form.Label>
                        <Bootstrap.Form.Control type="text" placeholder="Type username..." onChange={HandleUsername} />
                        <Bootstrap.Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Bootstrap.Form.Text>
                    </Bootstrap.Form.Group>

                    <Bootstrap.Form.Group controlId="formBasicPassword">
                        <Bootstrap.Form.Label>Password</Bootstrap.Form.Label>
                        <Bootstrap.Form.Control type="password" placeholder="Password" onChange={HandleUserPassword} />
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

export { LoginComponent };

export default LoginComponent;