import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import ArticleA from './Components/ArticleComponents/Articlehg.js';
import Login from './Components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './UseTheme';
import NavBar from './Components/NavBar';
import App from './App';

function MyRouter() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>


    );
}

export { MyRouter };

export default MyRouter;