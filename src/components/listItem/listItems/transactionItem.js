import React from 'react';

// Assets
import {Col} from 'react-bootstrap';

export default function TransactionItem(props) {
  const listItem = props.listItem;

  return (
    <div className="list-item">
      <Col xs={12}>
        <ul>
          <li className="item-label">{listItem.transactionName}</li>
          <li className="item-pill">{listItem.category}</li>
          <li className="item-pill">{listItem.moneySpent}</li>
          <li onClick={(e) => props.handleItemRemoveBtnClicked(e)} className="item-remove">x</li>
          <li onClick={(e) => props.handleItemEditBtnClicked(e)} className="item-edit">[edit]</li>
        </ul>
      </Col>
    </div>
  );
}