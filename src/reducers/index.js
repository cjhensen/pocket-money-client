import {
  CHANGE_VIEW, 
  TOGGLE_ADD_POPUP,  
  SHOW_EDIT_MODE, 
  SET_SELECTED_ITEM,
  SET_ACTIVE_TAB,
  TOGGLE_EDIT_MODE,
  LOG_IN_SUCCESS,
  ADD_ITEM_TO_LIST_SUCCESS,
  FETCH_INITIAL_USER_DATA_SUCCESS,
  DELETE_LIST_ITEM_SUCCESS,
  LOGOUT_SUCCESS
} from '../actions';

// index, signup, login, overview, transactions, categories, insights, settings
const initialState = {
  currentView: 'index',
  isLoggedIn: false,
  transactionsView: {
    activeTab: 'transactions'
  },
  addListItemPopup: {
    isDisplayed: false
  },
  editMode: {
    isActive: false
  },
  userData: {
    transactions: [],
    categories: [],
    income: []
  }
};

export const pmReducer = (state = initialState, action) => {

  // Logout
  if(action.type === LOGOUT_SUCCESS) {
    console.log('reducer logout');
    return Object.assign({}, state, {
      currentView: 'index',
      isLoggedIn: action.isLoggedIn,
      userData: {
        transactions: [],
        categories: [],
        income: []
      }
    });
  }

  // Change View
  if(action.type === CHANGE_VIEW) {
    console.log('change view');
    return Object.assign({}, state, {
      currentView: action.view
    });
  }

  // Toggle Add Item Popup
  if(action.type === TOGGLE_ADD_POPUP) {
    console.log('toggle add popup');
    return Object.assign({}, state, {
      addListItemPopup: {
        isDisplayed: action.isDisplayed
      }
    });
  }

  // Toggle Edit Mode
  if(action.type === TOGGLE_EDIT_MODE) {
    console.log('toggle edit mode');
    return Object.assign({}, state, {
      editMode: {
        ...state.editMode,
        isActive: action.isActive
      }
    });
  }

  // Show Edit Mode
  if(action.type === SHOW_EDIT_MODE) {
    console.log('show editmode');
    return Object.assign({}, state, {
      categoriesView: {
        ...state.categoriesView,
        showEditMode: action.showEditMode
      }
    })
  }

  // Set Active Tab
  if(action.type === SET_ACTIVE_TAB) {
    return Object.assign({}, state, {
      transactionsView: {
        ...state.transactionsView,
        activeTab: action.tab
      }
    });
  }

  // Set Selected Item
  if(action.type === SET_SELECTED_ITEM) {
    console.log('set selected item');
    return Object.assign({}, state, {
      categoriesView: {
        ...state.categoriesView,
        selectedItem: action.categoryItem
      }
    });
  }

  // Log In Success
  if(action.type === LOG_IN_SUCCESS) {
    console.log('log in success');
    return Object.assign({}, state, {
      isLoggedIn: action.isLoggedIn,
      currentView: 'overview'
    });
  }

  // Fetch Initial User Data Success
  if(action.type === FETCH_INITIAL_USER_DATA_SUCCESS) {
    console.log('fetch success, syncing state');
    return Object.assign({}, state, {
      userData: action.userData
    });
  }

  // Add Item to List Success
  if(action.type === ADD_ITEM_TO_LIST_SUCCESS) {
    if(action.itemType === 'category') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          categories: [
            ...state.userData.categories, action.item
          ]
        }
      });
    }
    if(action.itemType === 'transaction') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          transactions: [
            ...state.userData.transactions, action.item
          ]
        }
      });
    }
    if(action.itemType === 'income') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          income: [
            ...state.userData.income, action.item
          ]
        }
      });
    }
  }

  // Delete List Item Success
  if(action.type === DELETE_LIST_ITEM_SUCCESS) {
    console.log('delete selected item', action.itemType);
    console.log('item', action.item);
    if(action.itemType === 'category') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          categories: state.userData.categories.filter(category => category.id !== action.item.id)
        }
      });
    }
    if(action.itemType === 'transaction') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          transactions: state.userData.transactions.filter(transaction => transaction.id !== action.item.id)
        }
      });
    }
    if(action.itemType === 'income') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          income: state.userData.income.filter(incomeItem => incomeItem.id !== action.item.id)
        }
      });
    }

  }
  
  return state;
};