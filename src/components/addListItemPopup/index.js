import React from 'react';
import {connect} from 'react-redux';

// Components
import CategoryPopup from './popups/categoryPopup';
import TransactionPopup from './popups/transactionPopup';
import IncomePopup from './popups/incomePopup';

// Assets
import './addListItemPopup.css';

// Actions
import {toggleAddPopup, addNewItemToList} from '../../actions';

export class AddListItemPopupContainer extends React.Component {

  handleClosePopupBtnClicked(e) {
    console.log('handleClosePopupBtnClicked');
    this.hideAddListItemPopup();
  }

  // might need to change prevent default when using endpoints
  handleAddFormSubmit(e) {
    console.log('handleFormSubmit');
    e.preventDefault();
    const formData = this.getFormData(e);
    this.doSomethingWithFormData(formData);
    this.hideAddListItemPopup();
  }

  hideAddListItemPopup() {
    this.props.dispatch(toggleAddPopup(false));
  }

  getFormData(e) {
    console.log('getFormData');
    const formElements = e.target.elements;

    const formData = {};

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

  // some api endpoint stuff eventually?
  doSomethingWithFormData(formData) {
    console.log('doSomethingWithFormData');
    console.log(formData);
    this.props.dispatch(addNewItemToList(formData, this.props.listItemType));
  }

  render() {
    if(this.props.isDisplayed) {
      switch(this.props.listItemType) {
        case 'category':
          return <CategoryPopup 
                    handleClosePopupBtnClicked={(e) => this.handleClosePopupBtnClicked(e)}
                    handleAddFormSubmit={(e) => this.handleAddFormSubmit(e)} />;
        case 'transaction':
          return <TransactionPopup 
                    handleClosePopupBtnClicked={(e) => this.handleClosePopupBtnClicked(e)}
                    handleAddFormSubmit={(e) => this.handleAddFormSubmit(e)} 
                    categories={this.props.categories} />;
        case 'income':
          return <IncomePopup 
                    handleClosePopupBtnClicked={(e) => this.handleClosePopupBtnClicked(e)}
                    handleAddFormSubmit={(e) => this.handleAddFormSubmit(e)} />
        default:
          return null;
      }

    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  isDisplayed: state.addListItemPopup.isDisplayed,
  categories: state.userData.categories
});
export default connect(mapStateToProps)(AddListItemPopupContainer);