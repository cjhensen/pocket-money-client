import React from 'react';

// Assets
import {Col} from 'react-bootstrap';
import './categories.css';

// Components
import ListItemContainer from '../listItem';
import ListControlsContainer from '../listControls';
import AddListItemPopupContainer from '../addListItemPopup';

export default function Categories(props) {
  const listItems = props.listItems;

  const listElements = listItems.map((item, index) =>
    <ListItemContainer 
      listItemType={'category'} 
      listItem={item}
      key={index} />
  );

  return (
    <div id="categories" className="view-wrap">

      <AddListItemPopupContainer listItemType={'category'} />

      <div className="category-header">
        <Col xs={12}>
          <ul>
            <li>Category</li>
            <li></li>
            <li>Remaining</li>
            <li>Spent</li>
            <li>Budget</li>
          </ul>
        </Col>
      </div>

      <div className="list-items">
        {listElements}
      </div>

      <ListControlsContainer btnText={'Add Category'} />
    </div>
  );
}