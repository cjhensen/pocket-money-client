import React from 'react';
import {connect} from 'react-redux';

import {showAddPopup} from '../../actions';

import AddItemToListPopup from './addItemToListPopup';


export class AddItemToListContainer extends React.Component {

  handleCloseBtnClicked() {
    console.log('handleCloseBtnClicked');
    this.hideAddItemPopup();
  }

  handleAddFormSubmit(e) {
    console.log('handleAddFormSubmit');
    // might need to remove e.preventDefault() when dealing with API endpoints
    e.preventDefault();
    this.doSomethingWithFormData(this.getFormData(e));
    this.clearForm(e);
    this.hideAddItemPopup();
  }

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

  doSomethingWithFormData(formData) {
    console.log('doSomethingWithFormData');
    console.log('formData', formData);
  }

  clearForm(e) {
    const elements = e.target.elements;

    for(let i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }
  }

  hideAddItemPopup() {
    console.log('hideAddItemPopup');
    if(this.props.showAddPopup === true) {
      this.props.dispatch(showAddPopup(false));
    }
  }

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
  showAddPopup: state.categoriesView.showAddPopup
});
export default connect(mapStateToProps)(AddItemToListContainer);