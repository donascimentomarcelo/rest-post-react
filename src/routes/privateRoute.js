import React from 'react'
import { Route } from 'react-router';
import Login from '../components/login/login';
import { isAuthenticated } from '../services/loginService';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const PrivateRoute = (props) => {
    return (
        props.isLogged
            ? <Route path={props.path} component={props.component}/>
            : <Route from='*' to='/login' component={Login}/>
    )
}

const mapStateToProps = state => (
    {
        enableReinitialize: true,
        isLogged: state.appReducer.logged,
    }
  );
  
const mapDispatchToProps = dispatch => bindActionCreators(
    { 
        isAuthenticated,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);