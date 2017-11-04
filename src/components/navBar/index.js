import React from 'react';

import './navBar.css';

export default function NavBar(props) {

  const navElements = props.navElements.map((element, index) =>

    <li key={index}>
      <button className={'nav-item ' + (props.currentView === element ? 'active' : "")} onClick={() => props.changeView(element)}>
        <div className={'nav-icon ' + element}></div>
        <div className={'nav-text ' + element}>{element}</div>
      </button>
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