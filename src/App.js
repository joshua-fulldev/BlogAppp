import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import { ChangeTheme } from './UseTheme';
import NavBar from './Components/NavBar';
import * as Bootstrap from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  const theme = ChangeTheme();

  return (    
    <div className={theme.mode ==="light"?"AppLight":"AppDark"}>      
      <Router />            
    </div>
  );
}

export default App;
