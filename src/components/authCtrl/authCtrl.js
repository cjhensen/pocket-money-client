import React from 'react';
import {Col} from 'react-bootstrap';

// Assets
import logo from '../../images/logo.png';
import './authCtrl.css';

// Components
import SignUp from '../signUp/signUp';
import LogIn from '../logIn/logIn';


export default function AuthCtrl(props) {

  const authView = props.authView;
  let authComponent = null;
  
  if(authView === "signup") {
    authComponent = <SignUp />
  }
  if(authView === "login") {
    authComponent = <LogIn /> 
  }

  return (

    <div className="auth-container">
      <Col xs={10} sm={6} md={4} xsOffset={1} smOffset={3} mdOffset={4}>
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>

        <div className="auth-component">
          {authComponent}
        </div>
      </Col>
    </div>
  );
}