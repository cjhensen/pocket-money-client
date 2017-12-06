import React from 'react';
import {Helmet} from 'react-helmet';
import HeaderContainer from '../header';

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

      <div className={(props.currentView === 'index' || props.currentView === 'login' || props.currentView === 'signup' ? 'hide' : 'app')}>
        <HeaderContainer currentView={props.currentView} />
        <Helmet>
          <meta charset="utf-8" name="description" content="" />
          <title>PocketMoney</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" />
        </Helmet>

        {viewComponent}
        {navComponent}
      </div>
    </div>
  );
}