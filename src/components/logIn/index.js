import React from 'react';

export default function SignUp(props) {
  return (
    <div id="log-in">
      <form onSubmit={e => props.handleLogInSubmit(e)}>

        <label htmlFor="username">
          <input type="username" name="username" id="username" placeholder="Username" required />
        </label>

        <label htmlFor="password">
          <input type="password" name="password" id="password" placeholder="Password" required />
        </label>

        <button className="auth-btn" type="submit">Log In</button>

      </form>

      <div className="auth-switcher">Don't have an account?<button className="auth-switcher-btn" onClick={(e) => props.handleSignUpLinkClicked(e)}>Sign Up</button></div>

    </div>
  );
}