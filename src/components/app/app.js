import React from 'react';
import './app.css';


export default function App(props) {
  const indexComponent = props.indexComponent;
  const viewComponent = props.viewComponent;
  const navComponent = props.navComponent;

  return (
    <div className="container-fluid">
      <div className="wrapper">
        {indexComponent}
      </div>

      <div className="app">
        {viewComponent}
        {navComponent}
      </div>
    </div>
  );
}