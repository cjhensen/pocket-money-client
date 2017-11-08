import React from 'react';

// Assets
import {Col} from 'react-bootstrap';

// Components
import ListItemContainer from '../listItem';
import ListControlsContainer from '../listControls';

export default function Transactions(props) {
  const listItems = props.listItems;

  const listElements = listItems.map((item, index) => 
    <ListItemContainer
      listItemType={'transaction'}
      listItem={item}
      key={index} />
  );

  return (
    <div id="transactions" className="view-wrap">
      <div className="list-items">
        {listElements}
      </div>

      <ListControlsContainer btnText={'Add Transaction'} />
    </div>
  );
}