import React from 'react';
import {connect} from 'react-redux';

import Categories from './categories';

export class CategoriesContainer extends React.Component {
  render() {
    return (
      <Categories 
        listItems={this.props.categories} />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.userData.categories
});
export default connect(mapStateToProps)(CategoriesContainer);