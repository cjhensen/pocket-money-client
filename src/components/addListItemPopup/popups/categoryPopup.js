import React from 'react';

export default function CategoryPopup(props) {
  return (
    <div id="add-list-item-popup-container">
      <div className="add-item">
        <span 
          className="close-popup"
          onClick={(e) => props.handleClosePopupBtnClicked(e)}>x</span>
        <form action="/addToCategories" onSubmit={(e) => props.handleAddFormSubmit(e)}>
          <label htmlFor="categoryName">
            <input 
              type="text"
              id="categoryName"
              name="categoryName"
              placeholder="Category" required />
          </label>

          <label htmlFor="totalBudget">
            <input 
              type="number"
              id="totalBudget"
              name="totalBudget"
              placeholder="Budget"
              step="0.01" required />
          </label>

          <button className="btn" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}