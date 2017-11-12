import {
  CHANGE_VIEW, 
  TOGGLE_ADD_POPUP, 
  ADD_NEW_CATEGORY, 
  SHOW_EDIT_MODE, 
  SET_SELECTED_ITEM,
  DELETE_SELECTED_ITEM,
  ADD_NEW_ITEM_TO_LIST,
  SET_ACTIVE_TAB,
  TOGGLE_EDIT_MODE
} from '../actions';

// index, signup, login, overview, transactions, categories, insights, settings
const initialState = {
  currentView: 'overview',
  isLoggedIn: true,
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
        categoryName: "Navi Loans",
        totalBudget: 290
      },
      {
        categoryName: "Thinkful Loans",
        totalBudget: 295
      },
      {
        categoryName: "Ski Savings",
        totalBudget: 150
      },
      {
        categoryName: "Online Subscriptions",
        totalBudget: 19
      },
      {
        categoryName: "Gas",
        totalBudget: 100
      },
      {
        categoryName: "Quick Groceries",
        totalBudget: 10
      },
      {
        categoryName: "Grooming Products",
        totalBudget: 10
      },
      {
        categoryName: "Haircut",
        totalBudget: 10
      },
      {
        categoryName: "Food",
        totalBudget: 60
      },
      {
        categoryName: "Other",
        totalBudget: 0
      }
    ],
    transactions: [
      {
        transactionName: "Navi",
        category: "Navi Loans",
        moneySpent: 290,
        transactionRecurring: true
      },
      {
        transactionName: "Thinkful",
        category: "Thinkful Loans",
        moneySpent: 295,
        transactionRecurring: true
      },
      {
        transactionName: "Ski Savings",
        category: "Ski Savings",
        moneySpent: 150,
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
        transactionName: "Call of Duty",
        category: "Other",
        moneySpent: 52,
        transactionRecurring: false
      },
      {
        transactionName: "Croxleys w/ Tom",
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
        transactionName: "iPhone Case",
        category: "Other",
        moneySpent: 20,
        transactionRecurring: false
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
      },
      {
        incomeName: "Halloween Mom",
        incomeAmount: 50,
        incomeRecurring: false
      },
      {
        incomeName: "Staples tip",
        incomeAmount: 5,
        incomeRecurring: false
      },
      {
        incomeName: "Aunt Lisa Halloween",
        incomeAmount: 20,
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

  if(action.type === DELETE_SELECTED_ITEM) {
    console.log('delete selected item', action.itemType);
    console.log('item', action.item);
    if(action.itemType === 'category') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          categories: state.userData.categories.filter(category => category.categoryName !== action.item.categoryName)
        }
      });
    }
    if(action.itemType === 'transaction') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          transactions: state.userData.transactions.filter(transaction => transaction.transactionName !== action.item.transactionName)
        }
      });
    }
    if(action.itemType === 'income') {
      return Object.assign({}, state, {
        userData: {
          ...state.userData,
          income: state.userData.income.filter(incomeItem => incomeItem.incomeName !== action.item.incomeName)
        }
      });
    }
    
  }
  
  return state;
};