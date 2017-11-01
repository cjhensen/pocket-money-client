import React from 'react';
import './signUp.css';

export default function SignUp(props) {
  return (
    <div id="sign-up">
      <form action="/signup">
        <label htmlFor="firstName">
          <input type="text" name="firstName" id="firstName" placeholder="First name" required />
        </label>

        <label htmlFor="lastName">
          <input type="text" name="lastName" id="lastName" placeholder="Last name" required />
        </label>

        <label htmlFor="email">
          <input type="email" name="email" id="email" placeholder="Email" required />
        </label>

        <label htmlFor="password">
          <input type="password" name="firstName" id="firstName" placeholder="Password" required />
        </label>

        <button type="submit">Sign Up</button>

      </form>

      <div className="auth-switcher">Already have an account? <a href="https://www.google.com">Sign in</a></div>
    </div>
  );
}