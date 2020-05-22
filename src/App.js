import React, { Component } from 'react';
import './App.css';
import Routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/header/header';
import Sidebar from './layouts/menu/sidebar';
import Rightbar from './layouts/bars/rightbar';
import { isAuthenticated } from './services/loginService';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Axios from 'axios';

import { 
  reqInterceptor, 
  resInterceptor,
  callbackErrorRes,
  callbackErrorReq,
} from './interceptors/interceptors';

import Message from './layouts/messages/message';

export class App extends Component {

  UNSAFE_componentWillMount() {
    this.checkAuthAndReturnComponent();
  }

  checkAuthAndReturnComponent = () => this.props.isAuthenticated();

  showSidebar = () => this.props.isLogged ? <Sidebar/> :  null;

  showRightbar = () => this.props.isLogged ? <Rightbar/> :  null;

  showHeader = () => this.props.isLogged ? <Header/> :  null;

  showContentWrapperClass = () => this.props.isLogged ? "content-wrapper" : null;
  
  render() {
    return (
      <div className="wrapper">
        {this.showHeader()}
        {this.showSidebar()}
          <div className={this.showContentWrapperClass()}>
              <Routes/>
          </div>
        {this.showRightbar()}
        <Message/>
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

const mapDispatchToProps = dispatch => bindActionCreators(
  { 
    isAuthenticated,
  },
  dispatch
);

Axios.interceptors.request.use(reqInterceptor, callbackErrorReq);

Axios.interceptors.response.use(resInterceptor, callbackErrorRes);

export default connect(mapStateToProps, mapDispatchToProps)(App);
