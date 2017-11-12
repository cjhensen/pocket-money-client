import React from 'react';
import {connect} from 'react-redux';

import Overview from './overview';

export class OverviewContainer extends React.Component {

  calculateRemainingBudget() {
    const transactionsSum = this.calculateTransactionsSum();
    // const incomeSum = this.calculateIncomeSum();
    const categorySum = this.calculateCategorySum();

    // dollar difference
    const difference = categorySum - transactionsSum;

    // percentages
    const percentageRemaining = ((difference * 100) / categorySum);
    const percentageUsed = 100 - percentageRemaining;

    return {percentageUsed: percentageUsed.toFixed(2), remainingMoney: difference}
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
      <Overview remainingBudget={this.calculateRemainingBudget()} />
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.userData.transactions,
  categories: state.userData.categories,
  income: state.userData.income
});
export default connect(mapStateToProps)(OverviewContainer);