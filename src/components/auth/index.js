import React from 'react';
import {connect} from 'react-redux';

import Auth from './auth';
import SignUp from '../signUp';
import LogIn from '../logIn';

import {registerUser, logInUser, changeView, resetAuthErrorMsg} from '../../actions';

export class AuthContainer extends React.Component {
  handleSignInLinkClicked(e) {
    console.log('handleSignInLinkClicked');
    this.props.dispatch(resetAuthErrorMsg());
    this.props.dispatch(changeView('login'));
  }

  handleSignUpLinkClicked(e) {
    console.log('handleSignUpLinkClicked');
    this.props.dispatch(resetAuthErrorMsg());
    this.props.dispatch(changeView('signup'));
  }
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
      authComponent = <SignUp 
                        handleRegisterSubmit={e => this.handleRegisterSubmit(e)}
                        handleSignInLinkClicked={e => this.handleSignInLinkClicked(e)}
                        message={this.props.authErrorMsg} />;
    }
    if(authView === 'login') {
      authComponent = <LogIn 
                        handleLogInSubmit={e => this.handleLogInSubmit(e)}
                        handleSignUpLinkClicked={e => this.handleSignUpLinkClicked(e)}
                        message={this.props.authErrorMsg} />
    }

    return (
      <Auth authComponent={authComponent} />
    );
  }
}
const mapStateToProps = state => ({
  authErrorMsg: state.authErrorMsg
});

export default connect(mapStateToProps)(AuthContainer);