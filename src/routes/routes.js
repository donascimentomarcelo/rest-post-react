import React from 'react';
import { Redirect, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from '../components/login/login';
import { Dashboard } from '../components/dashboard/dashboard';

import PrivateRoute from './privateRoute';

const Routes = props => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute path='/login' component={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <Redirect from='*' to='/login'/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
