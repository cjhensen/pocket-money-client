import React from 'react';

import Header from './header';

export default function HeaderContainer(props) {

  if(props.currentView === 'categories') {
    return null;
  } else {
    return <Header title={props.currentView} />
  }
}