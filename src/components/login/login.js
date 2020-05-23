import React, { Component } from 'react';
import LoginForm from './form/loginForm';

import * as CONST from './../../helpers/constants';

import { connect } from 'react-redux';

export class Login extends Component {
    
    componentWillMount = () => {
        this.redirectToDashboard();
    }

    redirectToDashboard = () => {
        if (this.props.isLogged) {
            this.props.history.push(CONST.DASHBOARD);
        }
    }

    render() {
        return (
            <div>
                <LoginForm/>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        enableReinitialize: true,
        isLogged: state.appReducer.logged,
    }
);

export default connect(mapStateToProps, null)(Login)
