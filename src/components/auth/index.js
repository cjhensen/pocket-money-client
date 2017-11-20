import React from 'react';
import {connect} from 'react-redux';

import Auth from './auth';
import SignUp from '../signUp';
import LogIn from '../logIn';

import {registerUser, logInUser} from '../../actions';

export class AuthContainer extends React.Component {
  // const authView = props.authView;
  // let authComponent = null;

  // if(this.props.authView === 'signup') {
  //   authComponent = <SignUp />;
  // }
  // if(this.props.authView === 'login') {
  //   authComponent = <LogIn />
  // }

  handleRegisterSubmit(e) {
    console.log('handleRegisterSubmit');
    e.preventDefault();
    const formData = this.getFormData(e);
    const user = formData;

    this.props.dispatch(registerUser(user));
  }

  handleLogInSubmit(e) {
    console.log('handleLogInSubmit');
    e.preventDefault();
    const formData = this.getFormData(e);
    const user = formData;
    this.props.dispatch(logInUser(user));
  }

  getFormData(e) {
    const formElements = e.target.elements;

    const formData = {};

    for(let i = 0; i < formElements.length; i++) {
      if(formElements[i].nodeName === "INPUT") {
        formData[formElements[i].name] = formElements[i].value;
      }
    }

    return formData;
  }

  render() {
    const authView = this.props.authView;
    let authComponent = null;

    if(authView === 'signup') {
      authComponent = <SignUp handleRegisterSubmit={e => this.handleRegisterSubmit(e)} />;
    }
    if(authView === 'login') {
      authComponent = <LogIn handleLogInSubmit={e => this.handleLogInSubmit(e)} />
    }

    return (
      <Auth authComponent={authComponent} />
    );
  }
}

export default connect()(AuthContainer);