import React from 'react';
import './signUp.css';

export default function SignUp(props) {
  return (
    <div id="sign-up">
      <form onSubmit={e => props.handleRegisterSubmit(e)}>
        <label htmlFor="username">
          <input type="text" name="username" id="username" placeholder="Username" required />
        </label>

        <label htmlFor="password">
          <input type="password" name="password" id="password" placeholder="Password" required />
        </label>

        <button className="auth-btn" type="submit">Sign Up</button>

      </form>

      <div className="auth-switcher">Already have an account?<button className="auth-switcher-btn" onClick={(e) => props.handleSignInLinkClicked(e)}>Sign In</button></div>
    </div>
  );
}