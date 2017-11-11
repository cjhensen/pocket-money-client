import React from 'react';
import {connect} from 'react-redux';

// Actions
import {setActiveTab} from '../../actions';

import Transactions from './transactions';

export class TransactionsContainer extends React.Component {
  handleTransactionsTabClicked(e) {
    console.log('handleTransactionsTabClicked');
    this.props.dispatch(setActiveTab('transactions'));
  }

  handleIncomeTabClicked(e) {
    console.log('handleIncomeTabClicked');
    this.props.dispatch(setActiveTab('income'));
  }


  render() {
    return (
      <Transactions 
        transactionsListItems={this.props.transactions}
        incomeListItems={this.props.income}
        activeTab={this.props.activeTab}
        handleTransactionsTabClicked={(e) => this.handleTransactionsTabClicked(e)}
        handleIncomeTabClicked={(e) => this.handleIncomeTabClicked(e)} />
    );
  }
}
const mapStateToProps = state => ({
  transactions: state.userData.transactions,
  income: state.userData.income,
  activeTab: state.transactionsView.activeTab
});
export default connect(mapStateToProps)(TransactionsContainer);