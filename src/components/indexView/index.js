import React from 'react';

// Components
import IndexView from './indexView';
import AuthContainer from '../auth';


export default function IndexViewContainer(props) {

  const currentView = props.currentView;

  function showSignUp(e) {
    console.log('showSignUp');
    e.preventDefault();
    props.changeView('signup');
  }

  function showLogIn(e) {
    console.log('showLogIn');
    e.preventDefault();
    props.changeView('login');
  }

  function showView() {
    switch(currentView) {
      case 'index':
        return <IndexView 
                  showSignUp={(e) => showSignUp(e)} 
                  showLogIn={(e) => showLogIn(e)} />;
      case 'signup':
        return <AuthContainer authView={'signup'} />;
      case 'login':
        return <AuthContainer authView={'login'} />;
      default:
        return <div>That page does not exist</div>;
    }
  }

  return (
    showView()
  );
}