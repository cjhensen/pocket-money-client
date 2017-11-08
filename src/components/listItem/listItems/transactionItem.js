import React from 'react';

// Assets
import {Col} from 'react-bootstrap';

export default function TransactionItem(props) {
  const listItem = props.listItem;
  const itemEventHandlers = props.itemEventHandlers;

  return (
    <div className="category">
      <Col xs={12}>
        <ul>
          <li className="category-label">{listItem.transactionName}</li>
          <li className="category-total">{listItem.moneySpent}</li>
          <li onClick={(e) => itemEventHandlers.handleItemRemoveBtnClicked(e)} className="item-remove">x</li>
          <li onClick={(e) => itemEventHandlers.handleItemEditBtnClicked(e)} className="item-edit">[edit]</li>
        </ul>
      </Col>
    </div>
  );
}