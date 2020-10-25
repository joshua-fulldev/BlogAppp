import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import { ChangeTheme } from './UseTheme';
import NavBar from './Components/NavBar';
import * as Bootstrap from 'react-bootstrap';

function App() {
  const theme = ChangeTheme();

  return (
    <div className={theme.mode ==="light"?"AppLight":"AppDark"}>
      <NavBar>
        <Bootstrap.Button onClick={theme.changeMode} className="ThemeButton">{theme.mode}</Bootstrap.Button>
      </NavBar>
      <Router />
      
    </div>
  );
}

export default App;
