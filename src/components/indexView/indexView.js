import React from 'react';

export default function IndexView(props) {
  return (
      <div id="view-index">
        <div>
          About
          <br />
          <button
            type="button"
            onClick={(e) => props.showSignUp(e)}>Sign Up</button>
          <br />
          <button
            type="button"
            onClick={(e) => props.showLogIn(e)}>Log In</button>
        </div>
      </div>
  );
}