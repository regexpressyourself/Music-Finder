import React from 'react';
import ReactRouter from 'react-router';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import  Main from '../components/Main';
import Home from '../components/Home';
import Search from '../components/Search';
import Results from '../components/Results';

let routes = (
    <Router history={hashHistory}>

        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/results' component={Results} />
        </Route>
    </Router>
)

export default routes;
