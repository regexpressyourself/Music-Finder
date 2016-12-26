import React from 'react';
import ReactRouter from 'react-router';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import  Main from '../components/Main';
import Home from '../components/Home';
import Search from '../components/Search';

var routes = (
    <Router history={hashHistory}>

        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='search' component={Search} />
        </Route>
    </Router>
)

export default routes;
