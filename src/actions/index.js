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