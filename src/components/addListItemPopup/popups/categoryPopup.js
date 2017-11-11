import React from 'react';

export default function CategoryPopup(props) {
  return (
    <form action="/addToCategories">
      <label htmlFor="categoryName">
        <input 
          type="text"
          id="categoryName"
          placeholder="Category" required />
      </label>

      <label htmlFor="totalBudget">
        <input 
          type="number"
          id="totalBudget"
          placeholder="Budget"
          step="0.01" required />
      </label>

      <button className="btn" type="submit">Add</button>
    </form>
  );
}