import React from 'react';

// Assets
import {Col} from 'react-bootstrap';

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

      <div className="list-items">
        {listElements}
      </div>

      <ListControlsContainer btnText={'Add Category'} />
    </div>
  );
}