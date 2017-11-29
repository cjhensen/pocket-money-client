import React from 'react';
import logo from '../../images/logo.png';
import './indexView.css';

export default function IndexView(props) {
  return (
      <div id="view-index" className="view-wrap">
        <header>
          <div className="logo">         
            <img alt="logo" src={logo} />   
          </div>
        </header>

        <button
            type="button"
            onClick={(e) => props.showSignUp(e)}>Sign Up</button>
          <br />
          <button
            type="button"
            onClick={(e) => props.showLogIn(e)}>Log In</button>
      </div>
  );
}