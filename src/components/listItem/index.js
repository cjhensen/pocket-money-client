import React from 'react';
import {connect} from 'react-redux';
import {deleteItemFromList} from '../../actions';

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
    console.log(itemType);
    this.props.dispatch(deleteItemFromList(selectedItem, itemType));
  }

  handleItemEditBtnClicked(e) {
    console.log('handleItemEditBtnClicked');
  }

  getListItemValues(item) {
    console.log('list-item', item);

    switch(this.props.listItemType) {
      case 'category':
        console.log('item', item);
        const categoryName = item.getElementsByClassName('item-label')[0].textContent;
        const totalBudget = Number(parseFloat(item.getElementsByClassName('category-total')[0].textContent.replace("$", ""), 10).toFixed(2));
        return {'categoryName': categoryName, 'totalBudget': totalBudget, 'id': item.dataset.id};
      case 'transaction':
        const transactionName = item.getElementsByClassName('item-label')[0].textContent;
        const category = item.getElementsByClassName('transaction-category')[0].textContent;
        const moneySpent = Number(parseFloat(item.getElementsByClassName('transaction-total')[0].textContent.replace("$", ""), 10).toFixed(2));
        // const transactionRecurring
        return {'transactionName': transactionName, 'category': category, 'moneySpent': moneySpent, 'id': item.dataset.id};
      case 'income':
        const incomeName = item.getElementsByClassName('item-label')[0].textContent;
        const incomeAmount = Number(parseFloat(item.getElementsByClassName('income-amount')[0].textContent.replace("$", ""), 10).toFixed(2));
        const incomeRecurring = (item.getElementsByClassName('income-recurring')[0].textContent == 'true');
        return {'incomeName': incomeName, 'incomeAmount': incomeAmount, 'incomeRecurring': incomeRecurring, 'id': item.dataset.id};
      default:
        return undefined;
    }
  }



  // Categories calculated numbers
  calculateCategorySpent(listItem) {
    const categoryItem = listItem;

    const transactionsFiltered = this.props.transactions.filter(function(transaction) {
      return transaction.category === categoryItem.categoryName;
    });

    let totalSpentPerCategory = 0;
    transactionsFiltered.forEach(function(transaction) {
      totalSpentPerCategory += transaction.moneySpent;
    });

    return totalSpentPerCategory;
  }

  calculateCategoryRemaining(listItem) {
    const categoryItem = listItem;
    const spent = this.calculateCategorySpent(categoryItem);

    return categoryItem.totalBudget - spent;
  }

  calculateCategorySpentPercentage(listItem) {
    const categoryItem = listItem;

    const spent = this.calculateCategorySpent(categoryItem);

    const percentage = Number(parseFloat(((spent * 100 ) / categoryItem.totalBudget).toFixed(2)));
    

    return percentage;
  }



  render() {

    switch(this.props.listItemType) {
      case 'category':
        return <CategoryItem 
                  listItem={this.props.listItem} 
                  handleItemRemoveBtnClicked={(e) => this.handleItemRemoveBtnClicked(e)}
                  handleItemEditBtnClicked={(e) => this.handleItemEditBtnClicked(e)}
                  categorySpent={this.calculateCategorySpent(this.props.listItem)}
                  categoryRemaining={this.calculateCategoryRemaining(this.props.listItem)}
                  spentPercentage={this.calculateCategorySpentPercentage(this.props.listItem)}
                  showEditMode={this.props.showEditMode} />;
      case 'transaction':
        return <TransactionItem 
                  listItem={this.props.listItem} 
                  handleItemRemoveBtnClicked={(e) => this.handleItemRemoveBtnClicked(e)}
                  handleItemEditBtnClicked={(e) => this.handleItemEditBtnClicked(e)}
                  showEditMode={this.props.showEditMode} />;
      case 'income':
        return <IncomeItem 
                  listItem={this.props.listItem} 
                  handleItemRemoveBtnClicked={(e) => this.handleItemRemoveBtnClicked(e)}
                  handleItemEditBtnClicked={(e) => this.handleItemEditBtnClicked(e)}
                  showEditMode={this.props.showEditMode} />;
      default:
        return undefined;
    }
  }
}

const mapStateToProps = state => ({
  currentView: state.currentView,
  transactions: state.userData.transactions,
  showEditMode: state.editMode.isActive
});
export default connect(mapStateToProps)(ListItemContainer);