import React from 'react';

export default function TransactionPopup(props) {
  return (
    <form action="/addToTransactions">
      <label htmlFor="transactionName">
        <input 
          type="text"
          id="transactionName"
          placeholder="Transaction" required />
      </label>

      <label htmlFor="moneySpent">
        <input 
          type="number"
          id="moneySpent"
          placeholder="Money Spent"
          step="0.01" required />
      </label>

      <label for="categories">
        <select
          name="categories"
          id="categories">
            <option value="" disabled defaultValue>Select</option>
        </select>
      </label>

      <button className="btn" type="submit">Add</button>
    </form>
  );
}