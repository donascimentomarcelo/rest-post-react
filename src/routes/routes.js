import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from '../components/login/login';
import { Dashboard } from '../components/dashboard/dashboard';
import  Category  from '../components/category/category';

import PrivateRoute from './privateRoute';

const Routes = props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <PrivateRoute path='/categories' component={Category}/>
            <Redirect from='*' to='/'/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
