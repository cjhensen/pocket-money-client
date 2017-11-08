import React from 'react';
import {connect} from 'react-redux';
import {deleteSelectedItem} from '../../actions';

// Components
import CategoryItem from './listItems/categoryItem';
import TransactionItem from './listItems/transactionItem';

// Assets
import './listItem.css';

export class ListItemContainer extends React.Component {

  handleItemRemoveBtnClicked(e) {
    console.log('handleItemRemoveBtnClicked');
    const selectedItem = this.getListItemValues(e.currentTarget.closest('.category'));
    console.log('selectedItem', selectedItem);

    this.props.dispatch(deleteSelectedItem(selectedItem));
  }

  handleItemEditBtnClicked(e) {
    console.log('handleItemEditBtnClicked');
  }

  getListItemValues(item) {
    const categoryLabel = item.getElementsByClassName('category-label')[0].textContent;
    const categoryTotal = Number(parseFloat(item.getElementsByClassName('category-total')[0].textContent.replace("$", ""), 10).toFixed(2));

    return {'categoryName': categoryLabel, 'totalBudget': categoryTotal};
  }


  render() {

    switch(this.props.listItemType) {
      case 'category':
        return <CategoryItem 
                  listItem={this.props.listItem} 
                  handleItemRemoveBtnClicked={(e) => this.handleItemRemoveBtnClicked(e)}
                  handleItemEditBtnClicked={(e) => this.handleItemEditBtnClicked(e)} />;
      case 'transaction':
        return <TransactionItem 
                  listItem={this.props.listItem} 
                  handleItemRemoveBtnClicked={(e) => this.handleItemRemoveBtnClicked(e)}
                  handleItemEditBtnClicked={(e) => this.handleItemEditBtnClicked(e)} />;
      case 'income':
        return <div>income item component</div>;
      default:
        return undefined;
    }
  }
}

const mapStateToProps = state => ({
  currentView: state.currentView
});
export default connect(mapStateToProps)(ListItemContainer);