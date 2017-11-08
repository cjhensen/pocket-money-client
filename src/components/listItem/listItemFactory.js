import React from 'react';

// Components
import CategoryItem from './listItems/categoryItem';
import TransactionItem from './listItems/transactionItem';

export default class ListItemFactory {
  static build(listItemType, listItem, itemEventHandlers) {
    switch(listItemType) {
      case 'category':
        return <CategoryItem listItem={listItem} itemEventHandlers={itemEventHandlers} />;
      case 'transaction':
        return <TransactionItem listItem={listItem} itemEventHandlers={itemEventHandlers} />;
      case 'income':
        return <div>income item component</div>;
      default:
        return undefined;
    }
  }
}