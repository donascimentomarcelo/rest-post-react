import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from '../components/login/login';
import Dashboard from '../components/dashboard/dashboard';
import Category  from '../components/category/category';
import CategoryForm from '../components/category/categoryForm/categoryForm';
import Subcategory from '../components/subcategory/subcategory';

import PrivateRoute from './privateRoute';

const Routes = props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <PrivateRoute path='/categories/list' component={Category}/>
            <PrivateRoute path='/categories/new' component={CategoryForm}/>
            <PrivateRoute path='/categories/:id/edit' component={CategoryForm}/>
            <PrivateRoute path='/subcategories/list' component={Subcategory}/>
            <Redirect from='*' to='/'/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
