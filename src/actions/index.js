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

/* **************************************************
   Login, Logout, & Signup
 ************************************************** */
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  isLoggedIn: false
});

export const logout = () => dispatch => {
  console.log('logout');

  return fetch(`${API_BASE_URL}/logout`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include'
  })
  .then(response => normalizeResponseErrors(response))
  .then(response => {
    if(!response.ok) {
      console.log('error');
    }
    // console.log('response', response);
    dispatch(logoutSuccess());
  })
  .catch(error => {
    // const {code} = error;
    throw(error);
  })
}

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
   Fetch Initial User Data
 ************************************************** */
 export const FETCH_INITIAL_USER_DATA_SUCCESS = 'FETCH_INITIAL_USER_DATA_SUCCESS';
 export const fetchInitialUserDataScucess = (userData) => ({
  type: FETCH_INITIAL_USER_DATA_SUCCESS,
  userData
 });

 export const fetchInitialUserData = () => dispatch => {
  console.log('fetchInitialUserData');

  return fetch(`${API_BASE_URL}/userdata`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include'
  })
  .then(response => normalizeResponseErrors(response))
  .then(response => response.json())
  .then(response => {
    if(!response.ok) {
      console.log('error');
    }
    console.log('response', response);
    const userData = response.userData;
    dispatch(fetchInitialUserDataScucess(userData));
  })
  .catch(error => {
    // const {code} = error;
    throw(error);
  })
 };


/* **************************************************
   Add List Item
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
    // const {code} = error;
    throw(error);
  })
};

/* **************************************************
   Delete List Item
 ************************************************** */
export const DELETE_LIST_ITEM_SUCCESS = 'DELETE_LIST_ITEM_SUCCESS';
export const deleteListItemSuccess = (item, itemType) => ({
  type: DELETE_LIST_ITEM_SUCCESS,
  item,
  itemType
});

export const deleteItemFromList = (item, itemType) => dispatch => {
  console.log('deleteItemFromList');

  return fetch(`${API_BASE_URL}/${itemType}/${item.id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include'
  })
  .then(response => normalizeResponseErrors(response))
  .then(response => {
    if(!response.ok) {
      console.log('error');
    }
    // on success of delete
    dispatch(deleteListItemSuccess(item, itemType));
  })
  .catch(error => {
    throw(error);
  })
};











