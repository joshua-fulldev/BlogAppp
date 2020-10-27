import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import ArticleA from './ArticleComponents/Articlehg.js';
import Login from './Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RealHome from './RealHome';
import { ThemeProvider, ChangeTheme } from '../UseTheme';

function SubRouter() {
    const changeTheme = ChangeTheme();

    return (
        <ThemeProvider className={changeTheme.mode ==="light"?"AppLight":"AppDark"}>
            <BrowserRouter >
                <Switch>
                    <Route path="/articlea" component={ArticleA} />
                    <Route path="/articleb" component={ArticleA} />
                    <Route path="/articlec" component={ArticleA} />
                    <Route path="/articled" component={ArticleA} />
                    <Route path="/articlee" component={ArticleA} />
                    <Route path="/articlef" component={ArticleA} />
                    <Route path="/" component={RealHome} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>


    );
}

export default SubRouter;