import React from 'react';

export default function TransactionPopup(props) {

  const categoriesOptions = props.categories.map((categoryItem, index) => 
    <option key={index} value={categoryItem.categoryName}>{categoryItem.categoryName}</option>
  );

  return (
    <div id="add-list-item-popup-container">
      <div className="add-item">
        <span 
          className="close-popup"
          onClick={(e) => props.handleClosePopupBtnClicked(e)}>x</span>
        <form action="/addToTransactions" onSubmit={(e) => props.handleAddFormSubmit(e)}>
          <label htmlFor="transactionName">
            <input 
              type="text"
              name="transactionName"
              id="transactionName"
              placeholder="Transaction" required />
          </label>

          <label htmlFor="moneySpent">
            <input 
              type="number"
              id="moneySpent"
              name="moneySpent"
              placeholder="Money Spent"
              step="0.01" required />
          </label>

          <label htmlFor="category">
            <select
              name="category"
              id="category"
              required>
                <option value="" disabled defaultValue>Select</option>
                {categoriesOptions}
            </select>
          </label>

          <button className="btn btn-add" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}