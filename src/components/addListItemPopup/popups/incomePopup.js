import React from 'react';

export default function IncomePopup(props) {

  return (
    <div id="add-list-item-popup-container">
      <div className="add-item">
        <span 
          className="close-popup"
          onClick={(e) => props.handleClosePopupBtnClicked(e)}>x</span>
        <form action="/addToIncome" onSubmit={(e) => props.handleAddFormSubmit(e)}>
          <label htmlFor="incomeName">
            <input 
              type="text"
              id="incomeName"
              name="incomeName"
              placeholder="Income Name" required />
          </label>

          <label htmlFor="incomeAmount">
            <input 
              type="number"
              id="incomeAmount"
              name="incomeAmount"
              placeholder="Budget"
              step="0.01" required />
          </label>

          <label htmlFor="incomeRecurring">
            <input
              type="checkbox"
              id="incomeRecurring"
              name="incomeRecurring" />
          </label>

          <button className="btn btn-add" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}