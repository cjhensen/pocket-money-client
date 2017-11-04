import React from 'react';

import Auth from './auth';
import SignUp from '../signUp';
import LogIn from '../logIn';

export default function AuthContainer(props) {
  const authView = props.authView;
  let authComponent = null;

  if(authView === 'signup') {
    authComponent = <SignUp />;
  }
  if(authView === 'login') {
    authComponent = <LogIn />
  }

  return (
    <Auth authComponent={authComponent} />
  );
}