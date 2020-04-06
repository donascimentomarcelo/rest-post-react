import React from 'react'
import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '../services/loginService';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    { ...rest }
    render={ props => 
        rest.isLogged
        ? ( <Component { ...props }/> )
        : ( <Redirect from='*' to='/'/> )
    }/>
)

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