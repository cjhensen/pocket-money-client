import React from 'react';
import {connect} from 'react-redux';

import {fetchInitialUserData} from '../../actions';

import Overview from './overview';

export class OverviewContainer extends React.Component {

  componentDidMount() {
    if(!this.props.isLoggedIn) {
      return;
    }
    this.props.dispatch(fetchInitialUserData());
  }

  calculateRemainingBudget() {
    const transactionsSum = this.calculateTransactionsSum();
    // const incomeSum = this.calculateIncomeSum();
    const categorySum = this.calculateCategorySum();

    // dollar difference
    const difference = categorySum - transactionsSum;

    // percentages
    const percentageRemaining = ((difference * 100) / categorySum);
    const percentageUsed = 100 - percentageRemaining;

    return {
      percentageUsed: percentageUsed.toFixed(2),
      remainingMoney: difference.toFixed(2)
     }
  }

  calculateSavings() {
    const incomeSum = this.calculateIncomeSum();
    const categorySum = this.calculateCategorySum();
    const transactionsSum = this.calculateTransactionsSum();

    if(transactionsSum > categorySum) {
      return (incomeSum - transactionsSum).toFixed(2);
    } else {
      return (incomeSum - categorySum).toFixed(2);
    }
  }

  calculateTotalEstSavings() {
    const incomeSum = this.calculateIncomeSum();
    const transactionsSum = this.calculateTransactionsSum();

    const difference = incomeSum - transactionsSum;

    return difference.toFixed(2);
  }

  calculateTransactionsSum() {
    let transactionsSum = 0;
    this.props.transactions.forEach(function(transaction) {
      transactionsSum += transaction.moneySpent;
    });
    console.log('ts', transactionsSum);
    return transactionsSum;
  }

  calculateIncomeSum() {
    let incomeSum = 0;
    this.props.income.forEach(function(income) {
      incomeSum += income.incomeAmount;
    });
    console.log('is', incomeSum);
    return incomeSum;
  }

  calculateCategorySum() {
    let categorySum = 0;
    this.props.categories.forEach(function(category) {
      categorySum += category.totalBudget;
    });
    console.log('cs', categorySum);
    return categorySum;
  }



  render() {
    return (
      <Overview 
        remainingBudget={this.calculateRemainingBudget()}
        savings={this.calculateSavings()}
        totalEstSavings={this.calculateTotalEstSavings()} />
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  transactions: state.userData.transactions,
  categories: state.userData.categories,
  income: state.userData.income
});
export default connect(mapStateToProps)(OverviewContainer);