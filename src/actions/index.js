import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const CHANGE_VIEW = 'CHANGE_VIEW';
export const changeView = (view) => ({
  type: CHANGE_VIEW,
  view
});

export const TOGGLE_ADD_POPUP = 'TOGGLE_ADD_POPUP';
export const toggleAddPopup = (isDisplayed) => ({
  type: TOGGLE_ADD_POPUP,
  isDisplayed
});

export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const toggleEditMode = (isActive) => ({
  type: TOGGLE_EDIT_MODE,
  isActive
});

export const SHOW_EDIT_MODE = 'SHOW_EDIT_MODE';
export const showEditMode = (showEditMode) => ({
  type: SHOW_EDIT_MODE,
  showEditMode
});

export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const addNewCategory = (categoryName, totalBudget) => ({
  type: ADD_NEW_CATEGORY,
  category: {
    categoryName,
    totalBudget
  }
});

export const ADD_NEW_ITEM_TO_LIST = 'ADD_NEW_ITEM_TO_LIST';
// export const addNewItemToList = (item, itemType) => ({
//   type: ADD_NEW_ITEM_TO_LIST,
//   item,
//   itemType
// });

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  tab
});

export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
export const setSelectedItem = (categoryItem) => ({
  type: SET_SELECTED_ITEM,
  categoryItem
});

export const DELETE_SELECTED_ITEM = 'DELETE_SELECTED_ITEM';
export const deleteSelectedItem = (item, itemType) => ({
  type: DELETE_SELECTED_ITEM,
  item,
  itemType
});


// API Integration


// export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';

// export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
// export const createUserSuccess = user => ({
//   type: CREATE_USER_SUCCESS,
//   user
// });


/* **************************************************
   Login & Signup
 ************************************************** */
export const registerUser = user => dispatch => {
  console.log('register user');
  return fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(user)
  })
  .then(response => normalizeResponseErrors(response))
  .then(response => {
    console.log('register good');
    // if(response.ok) {
    //   dispatch(logInSuccess(true));
    // }
    if(!response.ok) {
      console.log('error');
    }
    // Log in after register
    dispatch(logInSuccess(true));
  })
  .catch(error => {
    throw(error);
  })
};

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const logInSuccess = isLoggedIn => ({
  type: LOG_IN_SUCCESS,
  isLoggedIn
});

export const logInUser = user => dispatch => {
  console.log('logInUser');
  return fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(user)
  })
  .then(response => normalizeResponseErrors(response))
  .then(response => {
    if(!response.ok) {
      console.log('error');
    }
    dispatch(logInSuccess(true));
  })
  .catch(error => {
    const {code} = error;
    if(code === 401) {
      // Do something on failure
      console.log('request failed');
    }
    throw(error);
  })
};


/* **************************************************
   Transaction
 ************************************************** */
 export const ADD_ITEM_TO_LIST_SUCCESS = 'ADD_ITEM_TO_LIST_SUCCESS';
 export const addItemToListSuccess = (item, itemType) => ({
  type: ADD_ITEM_TO_LIST_SUCCESS,
  item,
  itemType
 });

export const addNewItemToList = (item, itemType) => dispatch => {
  console.log('addNewItemToList');
  console.log(item, itemType);

  return fetch(`${API_BASE_URL}/${itemType}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(item)
  })
  .then(response => normalizeResponseErrors(response))
  .then(response => {
    if(!response.ok) {
      console.log('error');
    }
    // on success
    dispatch(addItemToListSuccess(item, itemType));
  })
  .catch(error => {
    const {code} = error;
    throw(error);
  })
};












