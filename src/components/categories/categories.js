import React from 'react';

// Assets
import {Col} from 'react-bootstrap';
import './categories.css';

// Components
import ListItemContainer from '../listItem';

export default function Categories(props) {
  const listItems = props.listItems;

  const listElements = listItems.map((item, index) => 
    <ListItemContainer 
      listItemType={'category'} 
      listItem={item}
      key={index} />
  );

  return (
    <div id="categories">
      <div className="category-items">
        {listElements}
      </div>

      <div className="category-controls">
        <Col xs={12}>
          <Col xs={6}>
            <button className="btn btn-edit">Add Category</button>
          </Col>
          <Col xs={6}>
            <button className="btn btn-edit">Edit</button>
          </Col>
        </Col>
      </div>
    </div>
  );
}