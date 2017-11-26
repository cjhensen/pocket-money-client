import React from 'react';

import MeterBarContainer from '../../meterBar';

// Assets
import {Col} from 'react-bootstrap';

export default function CategoryItem(props) {
  const listItem = props.listItem;

  return (
    <div className="list-item" data-id={listItem.id}>
      <Col xs={12}>
        <ul>
          <li className="item-label">{listItem.categoryName}</li>
          <li className="item-meter">
            <MeterBarContainer percentage={props.spentPercentage} />
          </li>
          <li className="item-pill category-remaining">{props.categoryRemaining}</li>
          <li className="item-pill category-spent">{props.categorySpent}</li>
          <li className="item-pill category-total">{listItem.totalBudget}</li>
          <li 
            onClick={(e) => props.handleItemRemoveBtnClicked(e)} 
            className={'item-remove ' + (props.showEditMode === true ? 'show' : "")}></li>
          <li 
            onClick={(e) => props.handleItemEditBtnClicked(e)} 
            className={'item-edit ' + (props.showEditMode === true ? '' : "")}>[edit]</li>
        </ul>
      </Col>
    </div>
  );
}