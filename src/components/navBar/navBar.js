import React from 'react';

import './navBar.css';

export default function NavBar(props) {

  const navElements = props.navElements.map((element, index) =>

    <li key={index}>
      <a href="" className={'nav-item ' + (props.currentView === element ? 'active' : "")} onClick={() => props.changeView(element)}>
        <div className={'nav-icon ' + element}></div>
        <div className={'nav-text ' + element}>{element}</div>
      </a>
    </li>
  );

  return (
    <div id="nav-container">
      <ul>
        {navElements}
      </ul>
    </div>
  );
}