import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from '../components/login/login';
import Dashboard from '../components/dashboard/dashboard';
import Category  from '../components/category/category';
import CategoryForm from '../components/category/categoryForm/categoryForm';
import Subcategory from '../components/subcategory/subcategory';
import SubcategoryForm from '../components/subcategory/subcategoryForm/subcategoryForm';
import Post from '../components/post/post';

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
            <PrivateRoute path='/subcategories/new' component={SubcategoryForm}/>
            <PrivateRoute path='/subcategories/:id/edit' component={SubcategoryForm}/>
            <PrivateRoute path='/posts/list' component={Post}/>
            <Redirect from='*' to='/'/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
