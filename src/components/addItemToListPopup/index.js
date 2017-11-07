import React from 'react';
import {connect} from 'react-redux';

import {showAddPopup, addNewCategory} from '../../actions';

import AddItemToListPopup from './addItemToListPopup';


export class AddItemToListContainer extends React.Component {

  // hide popup  
  handleCloseBtnClicked() {
    console.log('handleCloseBtnClicked');
    this.hideAddItemPopup();
  }

  // prevent default form submit (might change for endpoint usage)
  // doSomethingWithFormData will update state
  // getFormData gets values from the forms and returns an object with the data, 
    // which is used to create a new category, transaction, income, etc.
  // clearForm clears all form elements that have values
  // hide the item popup after submit
  handleAddFormSubmit(e) {
    console.log('handleAddFormSubmit');
    // might need to remove e.preventDefault() when dealing with API endpoints
    e.preventDefault();
    this.doSomethingWithFormData(this.getFormData(e));
    this.clearForm(e);
    this.hideAddItemPopup();
  }

  // get the data out of the form for the elements and return an object 
  // for the item type (transaction, income, category, etc.)
  getFormData(e) {
    console.log('getFormData');
    
    const formElements = e.target.elements;
    console.log(formElements);
    const formData = {};

    // loop through the form elements
    // allows for dynamic form elements for different use cases
    // currently supports input elements with text and number types
    // returns an object with form data values
    for(let i = 0; i < formElements.length; i++) {
      if(formElements[i].nodeName === "INPUT") {
        if(formElements[i].type === "text") {
          formData[formElements[i].name] = formElements[i].value;
        }
        if(formElements[i].type === "number") {
          formData[formElements[i].name] = Number(parseFloat(formElements[i].value, 10).toFixed(2));
        }
        if(formElements[i].type === "checkbox") {
          formData[formElements[i].name] = formElements[i].checked;
        }
      }
      if(formElements[i].nodeName === "SELECT") {
        formData[formElements[i].name] = formElements[i].value;
      }
    }

    return formData;
  }

  // update the state with the form data
  doSomethingWithFormData(formData) {
    console.log('doSomethingWithFormData');
    console.log('formData', formData);
    this.props.dispatch(addNewCategory(formData.categoryName, formData.totalBudget));
  }

  // clears all elements in the form that have values
  clearForm(e) {
    const elements = e.target.elements;

    for(let i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
  }

  // update state which hides the popup
  hideAddItemPopup() {
    console.log('hideAddItemPopup');
    if(this.props.showAddPopup === true) {
      this.props.dispatch(showAddPopup(false));
    }
  }

  // uses fields arrays containing objects which represent the fields that should
  // be in the for. Based on the prop formType passed in on the element where
  // the element is used. Will determine what fields to show and what api url to
  // submit the data to if e.preventDefault is turned off
  buildForm(formType) {
    if(this.props.formType === "categories") {
      const fields = [
        {
          element: "input",
          name: "categoryName",
          type: "text",
          placeholder: "Category"
        },
        {
          element: "input",
          name: "totalBudget",
          type: "number",
          placeholder: "Total Budget"
        }
      ];

      return fields;
    }
    if(this.props.formType === "transactions") {
      const fields = [
        {
          element: "input",
          name: "transactionName",
          type: "text",
          placeholder: "Transaction Name"
        },
        {
          element: "input",
          name: "moneySpent",
          type: "number",
          placeholder: "Money Spent"
        },
        {
          element: "select",
          name: "categories",
          values: ['cat1', 'cat2']
        }
      ];

      return fields;
    }

    if(this.props.formType === "income") {
      const fields = [
        {
          element: "input",
          name: "incomeName",
          type: "text",
          placeholder: "Income Name"
        },
        {
          element: "input",
          name: "incomeAmount",
          type: "number",
          placeholder: "Income Amount"
        },
        {
          element: "input",
          type: "checkbox",
          name: "incomeRecurring"
        }
      ];

      return fields;
    }
  }

  render() {
    return (
      <AddItemToListPopup
        formType={this.props.formType}
        formFields={this.buildForm(this.props.formType)} 
        showAddPopup={this.props.showAddPopup} 
        handleCloseBtnClicked={() => this.handleCloseBtnClicked()} 
        handleAddFormSubmit={(e) => this.handleAddFormSubmit(e)} />
    );
  }
}

const mapStateToProps = state => ({
  showAddPopup: state.categoriesView.showAddPopup,
  itemBeingEdited: state.categoriesView.itemBeingEdited
});
export default connect(mapStateToProps)(AddItemToListContainer);