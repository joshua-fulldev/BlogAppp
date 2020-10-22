import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import ArticleA from './Components/ArticleComponents/Articlehg.js';
import Login from './Components/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function MyRouter() {
    return(
        <>
            {
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/articlea" component={ArticleA} />
                    <Route path="/articleb" component={ArticleA} />
                    <Route path="/articlec" component={ArticleA} />
                    <Route path="/articled" component={ArticleA} />
                    <Route path="/articlee" component={ArticleA} />
                    <Route path="/articlef" component={ArticleA} />
                </Switch>
                </BrowserRouter>
            }
          </>
    );
}

export default MyRouter;