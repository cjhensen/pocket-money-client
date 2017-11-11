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

export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
export const setSelectedItem = (categoryItem) => ({
  type: SET_SELECTED_ITEM,
  categoryItem
});

export const DELETE_SELECTED_ITEM = 'DELETE_SELECTED_ITEM';
export const deleteSelectedItem = (categoryItem, itemType) => ({
  type: DELETE_SELECTED_ITEM,
  categoryItem,
  itemType
});