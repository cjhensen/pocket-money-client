import {TEST_ACTION} from '../actions';
const initialState = {};

export const pmReducer = (state = initialState, action) => {
  if(action.type === TEST_ACTION) {
    console.log('test action working');
  }
  return state;
};