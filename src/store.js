import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {pmReducer} from './reducers';

export default createStore(pmReducer, applyMiddleware(thunk));
