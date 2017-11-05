import React from 'react';
import {connect} from 'react-redux';

import {showAddPopup, showEditMode} from '../../actions';

import Categories from './categories';

export class CategoriesContainer extends React.Component {

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

  toggleEditMode() {
    console.log('toggleEditMode');
    if(this.props.showEditMode === false) {
      this.props.dispatch(showEditMode(true));
    } else {
      this.props.dispatch(showEditMode(false));
    }
  }


  handleRemoveBtnClicked() {
    console.log('handleRemoveBtnClicked');
    // remove stuff
  }

  showAddItemPopup() {
    console.log('showAddItemPopup');
    if(this.props.showAddPopup === false) {
      this.props.dispatch(showAddPopup(true));
    }
  }

  render() {
    return (
      <Categories
        showEditMode={this.props.showEditMode}
        handleAddBtnClicked={e => this.handleAddBtnClicked(e)}
        handleEditBtnClicked={e => this.handleEditBtnClicked(e)}
        handleDoneBtnClicked={e => this.handleDoneBtnClicked(e)}
        handleRemoveBtnClicked={() => this.handleRemoveBtnClicked()}
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