import React from 'react';
import {connect} from 'react-redux';

import {showAddPopup} from '../../actions';

import Categories from './categories';

export class CategoriesContainer extends React.Component {

  handleAddBtnClicked(e) {
    console.log('handleAddBtnClicked');
    e.preventDefault();
    this.showAddItemPopup();
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
        handleAddBtnClicked={e => this.handleAddBtnClicked(e)}
        categories={this.props.categories}
      />
    );
  }
}

const mapStateToProps = state => ({
  showAddPopup: state.categoriesView.showAddPopup,
  categories: state.userData.categories
});
export default connect(mapStateToProps)(CategoriesContainer);