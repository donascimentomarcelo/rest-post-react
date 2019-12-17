import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import Categories from '../components/categories/categories';
import Subcategories from '../components/subcategories/subcategories';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/categories' component={Categories}/>
        <Route path='/subcategories' component={Subcategories}/>
        <Redirect from='*' to='/'/>
    </Router>
);