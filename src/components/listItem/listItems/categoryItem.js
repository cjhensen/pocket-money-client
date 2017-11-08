import React from 'react';

// Assets
import {Col} from 'react-bootstrap';

export default function CategoryItem(props) {
  const listItem = props.listItem;
  const itemEventHandlers = props.itemEventHandlers;


  return (
    <div className="category">
      <Col xs={12}>
        <ul>
          <li className="category-label">{listItem.categoryName}</li>
          <li className="category-meter">[#####]</li>
          <li className="category-remaining">__</li>
          <li className="category-spent">__</li>
          <li className="category-total">{listItem.totalBudget}</li>
          <li onClick={(e) => itemEventHandlers.handleItemRemoveBtnClicked(e)} className="item-remove">x</li>
          <li onClick={(e) => itemEventHandlers.handleItemRemoveBtnClicked(e)} className="item-edit">[edit]</li>
        </ul>
      </Col>
    </div>
  );
}