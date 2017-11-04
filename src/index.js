import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import AppContainer from './components/app';

// css reset, bootstrap grid, and base styles
import './vendor/normalize.css';
import './vendor/bootstrap.min.css';
import './index.css';

// registerServiceWorker();
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);