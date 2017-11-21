import React from 'react';
import {Col} from 'react-bootstrap';

export default function IncomeItem(props) {
  const listItem = props.listItem;

  return (
    <div className="list-item" data-id={listItem.id}>
      <Col xs={12}>
        <ul>
          <li className="item-label">{listItem.incomeName}</li>
          <li className="item-pill income-recurring">{listItem.incomeRecurring.toString()}</li>
          <li className="item-pill income-amount">{listItem.incomeAmount}</li>
          <li 
            onClick={(e) => props.handleItemRemoveBtnClicked(e)} 
            className={'item-remove ' + (props.showEditMode === true ? 'show' : "")}>x</li>
          <li 
            onClick={(e) => props.handleItemEditBtnClicked(e)} 
            className={'item-edit ' + (props.showEditMode === true ? 'show' : "")}>[edit]</li>
        </ul>
      </Col>
    </div>
  );
}