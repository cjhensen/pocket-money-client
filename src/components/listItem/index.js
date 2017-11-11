import React from 'react';
import {connect} from 'react-redux';
import {deleteSelectedItem} from '../../actions';

// Components
import CategoryItem from './listItems/categoryItem';
import TransactionItem from './listItems/transactionItem';
import IncomeItem from './listItems/incomeItem';

// Assets
import './listItem.css';

export class ListItemContainer extends React.Component {

  handleItemRemoveBtnClicked(e) {
    console.log('handleItemRemoveBtnClicked');
    const selectedItem = this.getListItemValues(e.currentTarget.closest('.list-item'));
    console.log('selectedItem', selectedItem);
    const itemType = this.props.listItemType;
    this.props.dispatch(deleteSelectedItem(selectedItem, itemType));
  }

  handleItemEditBtnClicked(e) {
    console.log('handleItemEditBtnClicked');
  }

  getListItemValues(item) {
    console.log('list-item', item);

    switch(this.props.listItemType) {
      case 'category':
        const categoryName = item.getElementsByClassName('item-label')[0].textContent;
        const totalBudget = Number(parseFloat(item.getElementsByClassName('category-total')[0].textContent.replace("$", ""), 10).toFixed(2));
        return {'categoryName': categoryName, 'totalBudget': totalBudget};
      case 'transaction':
        const transactionName = item.getElementsByClassName('item-label')[0].textContent;
        const category = item.getElementsByClassName('transaction-category')[0].textContent;
        const moneySpent = Number(parseFloat(item.getElementsByClassName('transaction-total')[0].textContent.replace("$", ""), 10).toFixed(2));
        // const transactionRecurring
        return {'transactionName': transactionName, 'category': category, 'moneySpent': moneySpent};
      default:
        return undefined;
    }
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
        return <IncomeItem 
                  listItem={this.props.listItem} 
                  handleItemRemoveBtnClicked={(e) => this.handleItemRemoveBtnClicked(e)}
                  handleItemEditBtnClicked={(e) => this.handleItemEditBtnClicked(e)} />;
      default:
        return undefined;
    }
  }
}

const mapStateToProps = state => ({
  currentView: state.currentView
});
export default connect(mapStateToProps)(ListItemContainer);