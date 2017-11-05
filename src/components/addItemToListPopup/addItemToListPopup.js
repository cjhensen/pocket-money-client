import React from 'react';

import './addItemToListPopup.css';

import FormElement from '../formElement';

export default function AddItemToListPopup(props) {

  const formElements = props.formFields.map((element, index) =>
    <FormElement key={index} elementProperties={element} />

  );

  return (
    <div className={'add-item-container ' + (props.showAddPopup === true ? 'show-popup' : "")}>
      <div id="add-item">
        <span 
          onClick={() => props.handleCloseBtnClicked()}
          className="close-popup">x</span>
        <form action={props.formType === "categories" ?
         "/addToCategories" : props.formType === "transactions" ?
          "/addToTransactions" : props.formType === "income" ?
           "/addToIncome" : ""} onSubmit={(e) => props.handleAddFormSubmit(e)}>
          
          {formElements}

          <button 
            className="btn" 
            type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}