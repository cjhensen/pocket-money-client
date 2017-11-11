import React from 'react';

// Assets
import {Col} from 'react-bootstrap';
import './transactions.css';

// Components
import ListItemContainer from '../listItem';
import ListControlsContainer from '../listControls';
import AddListItemPopupContainer from '../addListItemPopup';

export default function Transactions(props) {
  // const listItems = props.listItems;
  const transactionsListItems = props.transactionsListItems;
  const incomeListItems = props.incomeListItems;

  // const listElements = listItems.map((item, index) => 
  //   <ListItemContainer
  //     listItemType={'transaction'}
  //     listItem={item}
  //     key={index} />
  // );
  let listElements = [];

  if(props.activeTab === 'transactions') {
    listElements = transactionsListItems.map((item, index) => 
      <ListItemContainer
        listItemType={'transaction'}
        listItem={item}
        key={index} />
    );
  }
  if(props.activeTab === 'income') {
    listElements = incomeListItems.map((item, index) =>
      <ListItemContainer
        listItemType={'income'}
        listItem={item}
        key={index} />
    );
  }

  return (
    <div id="transactions" className="view-wrap">

      <AddListItemPopupContainer 
          listItemType={'transaction'} />

      <div className="transactions-tabs">
        <button 
          className={'tab tab-transactions ' + (props.activeTab === 'transactions' ? 'tab-active' : "")}
          onClick={(e) => props.handleTransactionsTabClicked(e)}>Transactions</button>
        <button 
          className={'tab tab-income ' + (props.activeTab === 'income' ? 'tab-active' : "")}
          onClick={(e) => props.handleIncomeTabClicked(e)}>Income</button>
      </div>

      <div className="list-items">
        {listElements}
      </div>

      <ListControlsContainer btnText={'Add Transaction'} />
    </div>
  );
}