import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import Categories from '../components/categories/categories';
import Subcategories from '../components/subcategories/subcategories';
import SubcategoriesForm from '../components/subcategories/subcategoriesForm';
import Posts from '../components/posts/posts';
import PostsForm from '../components/posts/form/postsForm';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/categories' component={Categories}/>
        <Route path='/subcategories' component={Subcategories}/>
        <Route path='/subcategories/new' component={SubcategoriesForm}/>
        <Route path='/subcategories/:id/edit' component={SubcategoriesForm}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/posts/new' component={PostsForm}/>
        <Route path='/posts/:id/edit' component={SubcategoriesForm}/>
        <Redirect from='*' to='/'/>
    </Router>
);