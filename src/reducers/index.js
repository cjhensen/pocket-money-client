import {
  CHANGE_VIEW, 
  TOGGLE_ADD_POPUP, 
  ADD_NEW_CATEGORY, 
  SHOW_EDIT_MODE, 
  SET_SELECTED_ITEM,
  DELETE_SELECTED_ITEM,
  ADD_NEW_ITEM_TO_LIST,
  SET_ACTIVE_TAB,
  TOGGLE_EDIT_MODE,
  LOG_IN_SUCCESS,
  ADD_ITEM_TO_LIST_SUCCESS,
  FETCH_INITIAL_USER_DATA_SUCCESS,
  DELETE_LIST_ITEM_SUCCESS
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
    categories: [
      {
        categoryName: "Bills",
        totalBudget: 2000
      },
      {
        categoryName: "Loans",
        totalBudget: 1000
      },
      {
        categoryName: "Savings",
        totalBudget: 1200
      },
      {
        categoryName: "Online Subscriptions",
        totalBudget: 40
      },
      {
        categoryName: "Gas",
        totalBudget: 100
      },
      {
        categoryName: "Quick Groceries",
        totalBudget: 40
      },
      {
        categoryName: "Grooming Products",
        totalBudget: 30
      },
      {
        categoryName: "Haircut",
        totalBudget: 20
      },
      {
        categoryName: "Food",
        totalBudget: 150
      },
      {
        categoryName: "Other",
        totalBudget: 0
      }
    ],
    transactions: [
      {
        transactionName: "Navi",
        category: "Loans",
        moneySpent: 290,
        transactionRecurring: true
      },
      {
        transactionName: "School",
        category: "Loans",
        moneySpent: 295,
        transactionRecurring: true
      },
      {
        transactionName: "Spotify",
        category: "Online Subscriptions",
        moneySpent: 10,
        transactionRecurring: true
      },
      {
        transactionName: "Treehouse",
        category: "Online Subscriptions",
        moneySpent: 9,
        transactionRecurring: true
      },
      {
        transactionName: "Games",
        category: "Other",
        moneySpent: 52,
        transactionRecurring: false
      },
      {
        transactionName: "Croxleys",
        category: "Food",
        moneySpent: 20,
        transactionRecurring: false
      },
      {
        transactionName: "Strathmore",
        category: "Food",
        moneySpent: 2,
        transactionRecurring: false
      },
      {
        transactionName: "iPhone",
        category: "Other",
        moneySpent: 200,
        transactionRecurring: false
      }
    ],
    income: [
      { 
        incomeName: "Job",
        incomeAmount: 6000,
        incomeRecurring: true
      },
      { 
        incomeName: "Side Job",
        incomeAmount: 600,
        incomeRecurring: false
      }
    ]
  }
};

export const pmReducer = (state = initialState, action) => {

  if(action.type === LOG_IN_SUCCESS) {
    console.log('log in success');
    return Object.assign({}, state, {
      isLoggedIn: action.isLoggedIn,
      currentView: 'overview'
    });
  }

  if(action.type === FETCH_INITIAL_USER_DATA_SUCCESS) {
    console.log('fetch success, syncing state');
    return Object.assign({}, state, {
      userData: action.userData
    });
  }

  if(action.type === CHANGE_VIEW) {
    console.log('change view');
    return Object.assign({}, state, {
      currentView: action.view
    });
  }

  if(action.type === TOGGLE_ADD_POPUP) {
    console.log('toggle add popup');
    return Object.assign({}, state, {
      addListItemPopup: {
        isDisplayed: action.isDisplayed
      }
    });
  }

  if(action.type === TOGGLE_EDIT_MODE) {
    console.log('toggle edit mode');
    return Object.assign({}, state, {
      editMode: {
        ...state.editMode,
        isActive: action.isActive
      }
    });
  }

  if(action.type === SHOW_EDIT_MODE) {
    console.log('show editmode');
    return Object.assign({}, state, {
      categoriesView: {
        ...state.categoriesView,
        showEditMode: action.showEditMode
      }
    })
  }

  if(action.type  === ADD_NEW_CATEGORY) {
    console.log('add new category');
    return Object.assign({}, state, {
      userData: {
        categories: [
        ...state.userData.categories, action.category]
      }
    });
  }

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

  if(action.type === SET_ACTIVE_TAB) {
    return Object.assign({}, state, {
      transactionsView: {
        ...state.transactionsView,
        activeTab: action.tab
      }
    });
  }

  if(action.type === SET_SELECTED_ITEM) {
    console.log('set selected item');
    return Object.assign({}, state, {
      categoriesView: {
        ...state.categoriesView,
        selectedItem: action.categoryItem
      }
    });
  }

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