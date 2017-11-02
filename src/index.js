import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import App from './components/app/app';

// css reset, bootstrap grid, and base styles
import './vendor/normalize.css';
import './vendor/bootstrap.min.css';
import './index.css';

// registerServiceWorker();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);