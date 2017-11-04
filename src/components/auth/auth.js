import React from 'react';
import {Col} from 'react-bootstrap';

import logo from '../../images/logo.png';
import './auth.css';

export default function Auth(props) {

  const authComponent = props.authComponent;
  
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