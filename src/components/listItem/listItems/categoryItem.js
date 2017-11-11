import React from 'react';

// Assets
import {Col} from 'react-bootstrap';

export default function CategoryItem(props) {
  const listItem = props.listItem;

  return (
    <div className="list-item">
      <Col xs={12}>
        <ul>
          <li className="item-label">{listItem.categoryName}</li>
          <li className="item-meter">[#####]</li>
          <li className="item-pill">__</li>
          <li className="item-pill">__</li>
          <li className="item-pill category-total">{listItem.totalBudget}</li>
          <li onClick={(e) => props.handleItemRemoveBtnClicked(e)} className="item-remove">x</li>
          <li onClick={(e) => props.handleItemEditBtnClicked(e)} className="item-edit">[edit]</li>
        </ul>
      </Col>
    </div>
  );
}