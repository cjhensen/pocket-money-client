import React from 'react';
import {Col} from 'react-bootstrap';

// Components
import AddItemToListPopupContainer from '../addItemToListPopup';

// Assets
import './categories.css';

export default function Categories(props) {

  const categories = props.categories.map((category, index) => 
    <div 
      key={index} 
      className="category">
      <Col xs={12}>
        <ul>
          <li className="category-label">{category.categoryName}</li>
          <li className="category-meter">[######]</li>
          <li className="category-remaining">__</li>
          <li className="category-spent">__</li>
          <li className="category-total">{"$" + category.totalBudget}</li>
          <li 
            className={'remove ' + (props.showEditMode === true ? 'show' : "")}
            onClick={(e) => props.handleRemoveBtnClicked(e)}>x</li>
          <li 
            className={'item-edit ' + (props.showEditMode === true ? 'show' : "")}
            onClick={(e) => props.handleItemEditClicked(e)}>@</li>
        </ul>
      </Col>
    </div>
  );
  return (
    <div id="categories">
      <AddItemToListPopupContainer 
        formType={"categories"} />

      <div className="category-items">
        {categories}
      </div>

      <div className="category-controls">
        <Col xs={12}>
          <Col xs={6}>
            <button 
            className="btn btn-edit"
            onClick={(e) => props.handleAddBtnClicked(e)}>Add Category</button>
          </Col>
          <Col xs={6}>
            <button 
              className={'btn btn-edit ' + (props.showEditMode === true ? 'hide' : "")}
              onClick={(e) => props.handleEditBtnClicked(e)}>Edit</button>
            <button 
              className={'btn btn-done ' + (props.showEditMode === true ? 'show' : "")}
              onClick={(e) => props.handleDoneBtnClicked(e)}>Done</button>
          </Col>
        </Col>
      </div>

    </div>

  );
}