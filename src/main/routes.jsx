import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import Categories from '../categories/categories';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/categories' component={Categories}/>
        <Redirect from='*' to='/'/>
    </Router>
);