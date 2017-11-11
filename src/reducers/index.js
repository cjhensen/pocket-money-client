import {
  CHANGE_VIEW, 
  TOGGLE_ADD_POPUP, 
  ADD_NEW_CATEGORY, 
  SHOW_EDIT_MODE, 
  SET_SELECTED_ITEM,
  DELETE_SELECTED_ITEM,
  ADD_NEW_ITEM_TO_LIST,
  SET_ACTIVE_TAB
} from '../actions';

// index, signup, login, overview, transactions, categories, insights, settings
const initialState = {
  currentView: 'transactions',
  isLoggedIn: true,
  transactionsView: {
    activeTab: 'income'
  },
  addListItemPopup: {
    isDisplayed: false
  },
  userData: {
    categories: [
      {
        categoryName: "Food",
        totalBudget: 800,
        id: 12
      },
      {
        categoryName: "Entertainment",
        totalBudget: 200,
        id: 23
      },
      {
        categoryName: "School Loans",
        totalBudget: 1200,
        id: 34
      },
      {
        categoryName: "Skiing",
        totalBudget: "300",
        id: 45
      }
    ],
    transactions: [
      {
        transactionName: "Cabo fresh",
        category: "Food",
        moneySpent: 14.52,
        transactionRecurring: false,
        id: 789
      },
      {
        transactionName: "Domo sushi",
        category: "Food",
        moneySpent: 30.00,
        transactionRecurring: false,
        id: 98
      },
      {
        transactionName: "Movies",
        category: "Entertainment",
        moneySpent: 16.00,
        transactionRecurring: false,
        id: 87
      }
    ],
    income: [
      { 
        incomeName: "Staples wk1",
        incomeAmount: 280,
        incomeRecurring: false
      },
      { 
        incomeName: "Staples wk2",
        incomeAmount: 280,
        incomeRecurring: false
      },
      { 
        incomeName: "Staples wk3",
        incomeAmount: 280,
        incomeRecurring: false
      },
      { 
        incomeName: "Staples wk4",
        incomeAmount: 280,
        incomeRecurring: false
      }
    ]
  }
};

export const pmReducer = (state = initialState, action) => {
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

  if(action.type === ADD_NEW_ITEM_TO_LIST) {
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

  if(action.type === DELETE_SELECTED_ITEM) {
    console.log('delete selected item', action.itemType);

    if(action.itemType === 'category') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          categories: state.userData.categories.filter(category => category.categoryName !== action.categoryItem.categoryName)
        }
      });
    }
    if(action.itemType === 'transaction') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          transactions: state.userData.transactions.filter(transaction => transaction.transactionName !== action.categoryItem.transactionName)
        }
      });
    }
    
  }
  
  return state;
};