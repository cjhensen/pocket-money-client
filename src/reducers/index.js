import {CHANGE_VIEW, SHOW_ADD_POPUP, ADD_NEW_CATEGORY, SHOW_EDIT_MODE} from '../actions';

// index, signup, login, overview, transactions, categories, insights, settings
const initialState = {
  currentView: 'categories',
  isLoggedIn: true,
  categoriesView: {
    showAddPopup: false,
    showEditMode: false
  },
  userData: {
    categories: [
      {
        categoryName: "Food",
        totalBudget: 800
      },
      {
        categoryName: "Entertainment",
        totalBudget: 200
      },
      {
        categoryName: "School Loans",
        totalBudget: 1200
      },
      {
        categoryName: "Skiing",
        totalBudget: "300"
      }
    ]
  }
};

export const pmReducer = (state = initialState, action) => {
  if(action.type === CHANGE_VIEW) {
    console.log('change view action working');
    return Object.assign({}, state, {
      currentView: action.view
    });
  }

  if(action.type === SHOW_ADD_POPUP) {
    console.log('show add popup working');
    return Object.assign({}, state, {
      categoriesView: {
        showAddPopup: action.showAddPopup
      }
    });
  }

  if(action.type === SHOW_EDIT_MODE) {
    console.log('show editmode');
    return Object.assign({}, state, {
      categoriesView: {
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
  
  return state;
};