import React from 'react';
import {connect} from 'react-redux';

import Transactions from './transactions';

export class TransactionsContainer extends React.Component {
  render() {
    return (
      <Transactions 
        listItems={this.props.transactions} />
    );
  }
}
const mapStateToProps = state => ({
  transactions: state.userData.transactions
});
export default connect(mapStateToProps)(TransactionsContainer);