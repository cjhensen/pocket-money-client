import React from 'react';
import {connect} from 'react-redux';

import {showAddPopup, showEditMode, setSelectedItem, deleteSelectedItem} from '../../actions';

import Categories from './categories';

export class CategoriesContainer extends React.Component {

  // event handlers
  handleAddBtnClicked(e) {
    console.log('handleAddBtnClicked');
    e.preventDefault();
    this.showAddItemPopup();
  }

  handleEditBtnClicked(e) {
    console.log('handleAddBtnClicked');
    e.preventDefault();

    this.toggleEditMode();
  }

  handleDoneBtnClicked(e) {
    console.log('handleDoneBtnClicked');
    this.toggleEditMode();
  }

  handleRemoveBtnClicked(e) {
    console.log('handleRemoveBtnClicked');
    const selectedItem = this.getCategoryValues(e.currentTarget.closest('.category'));

    this.props.dispatch(deleteSelectedItem(selectedItem));
  }

  handleItemEditClicked(e) {
    console.log('handleItemEditClicked');
    const selectedItem = this.getCategoryValues(e.currentTarget.closest('.category'));
    this.props.dispatch(setSelectedItem(selectedItem));
    // dispatch edit
  }


  toggleEditMode() {
    console.log('toggleEditMode');
    if(this.props.showEditMode === false) {
      this.props.dispatch(showEditMode(true));
    } else {
      this.props.dispatch(showEditMode(false));
    }
  }

  showAddItemPopup() {
    console.log('showAddItemPopup');
    if(this.props.showAddPopup === false) {
      this.props.dispatch(showAddPopup(true));
    }
  }

  getCategoryValues(categoryItem) {
    const categoryLabel = categoryItem.getElementsByClassName('category-label')[0].textContent;
    const categoryTotal = Number(parseFloat(categoryItem.getElementsByClassName('category-total')[0].textContent.replace("$", ""), 10).toFixed(2));
    console.log(categoryLabel, categoryTotal);

    return {'categoryName' : categoryLabel, 'totalBudget' : categoryTotal};
  }

  render() {
    return (
      <Categories
        showEditMode={this.props.showEditMode}
        handleItemEditClicked={(e) => this.handleItemEditClicked(e)}
        handleAddBtnClicked={(e) => this.handleAddBtnClicked(e)}
        handleEditBtnClicked={(e) => this.handleEditBtnClicked(e)}
        handleDoneBtnClicked={(e) => this.handleDoneBtnClicked(e)}
        handleRemoveBtnClicked={(e) => this.handleRemoveBtnClicked(e)}
        categories={this.props.categories}
      />
    );
  }
}

const mapStateToProps = state => ({
  showAddPopup: state.categoriesView.showAddPopup,
  categories: state.userData.categories,
  showEditMode: state.categoriesView.showEditMode
});
export default connect(mapStateToProps)(CategoriesContainer);