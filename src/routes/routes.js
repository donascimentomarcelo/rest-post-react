import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from '../components/login/login';
import { Dashboard } from '../components/dashboard/dashboard';

const Routes = props => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Redirect from='*' to='/login'/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
