import React from 'react';

// Assets
import './transactions.css';

// Components
import ListItemContainer from '../listItem';
import ListControlsContainer from '../listControls';
import AddListItemPopupContainer from '../addListItemPopup';

/* ************************
COULD REFACTOR THIS IN SOME WAY WITH THE TAB SWITCHING, not important though
* ************************/
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

  let listItemType = "";
  let btnText = "";
  if(props.activeTab === 'transactions') {
    listItemType = "transaction";
    btnText = 'Add Transaction';

    listElements = transactionsListItems.map((item, index) => 
      <ListItemContainer
        listItemType={'transaction'}
        listItem={item}
        key={index} />
    );
  }
  if(props.activeTab === 'income') {
    listItemType = "income";
    btnText = 'Add Income';

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
          listItemType={listItemType} />

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

      <ListControlsContainer btnText={btnText} />
    </div>
  );
}