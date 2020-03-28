import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Login from '../components/login/login';
import { BrowserRouter } from 'react-router-dom';

const Routes = props => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}/>
            <Redirect from='*' to='/login'/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
