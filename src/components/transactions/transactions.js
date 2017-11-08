import React from 'react';

// Assets
import {Col} from 'react-bootstrap';

// Components
import ListItemContainer from '../listItem';

export default function Transactions(props) {
  const listItems = props.listItems;

  const listElements = listItems.map((item, index) => 
    <ListItemContainer
      listItemType={'transaction'}
      listItem={item}
      key={index} />
  );

  return (
    <div id="transactions">
      <div className="transaction-items">
        {listElements}
      </div>

      <div className="category-controls">
        <Col xs={12}>
          <Col xs={6}>
            <button className="btn btn-edit">Add Transaction</button>
          </Col>
          <Col xs={6}>
            <button className="btn btn-edit">Edit</button>
          </Col>
        </Col>
      </div>
    </div>
  );
}