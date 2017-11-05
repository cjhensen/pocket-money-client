export const CHANGE_VIEW = 'CHANGE_VIEW';
export const changeView = (view) => ({
  type: CHANGE_VIEW,
  view
});

export const SHOW_ADD_POPUP = 'SHOW_ADD_POPUP';
export const showAddPopup = (showAddPopup) => ({
  type: SHOW_ADD_POPUP,
  showAddPopup
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