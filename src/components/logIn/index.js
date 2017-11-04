import React from 'react';

export default function SignUp(props) {
  return (
    <div id="log-in">
      <form action="/loin">

        <label htmlFor="email">
          <input type="email" name="email" id="email" placeholder="Email" required />
        </label>

        <label htmlFor="password">
          <input type="password" name="firstName" id="firstName" placeholder="Password" required />
        </label>

        <button type="submit">Log In</button>

      </form>

    </div>
  );
}