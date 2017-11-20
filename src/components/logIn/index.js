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

        <button type="submit">Log In</button>

      </form>

    </div>
  );
}