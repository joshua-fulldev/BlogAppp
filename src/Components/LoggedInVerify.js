import React, { useState } from 'react';

function IsLoggedIn() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    var tracker = null;

    function setLoggedIn() {
        setUserLoggedIn(true);
        tracker = true;
    }
   

    return{
            userLoggedIn, setUserLoggedIn,
            setLoggedIn
        }   
}

export default IsLoggedIn;