import React from 'react';

import Header from './header';

export default function HeaderContainer(props) {

  if(props.currentView === 'categories' || props.currentView === 'index' || props.currentView === 'login' || props.currentView === 'signup') {
    return null;
  } else {
    return <Header title={props.currentView} />
  }
}