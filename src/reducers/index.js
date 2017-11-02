import {CHANGE_VIEW} from '../actions';

// index, signup, login, overview, transactions, categories, insights, settings
const initialState = {
  currentView: 'overview',
  isLoggedIn: true
};

export const pmReducer = (state = initialState, action) => {
  if(action.type === CHANGE_VIEW) {
    console.log('change view action working');
    return Object.assign({}, state, {
      currentView: action.view
    });
  }
  return state;
};