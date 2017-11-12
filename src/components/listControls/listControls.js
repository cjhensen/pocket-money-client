import React from 'react';

import {Col} from 'react-bootstrap';

// Assets
import './listControls.css';

export default function ListControls(props) {

  const btnText = props.btnText;

  return (
    <div className="list-controls">
      <Col xs={12}>
        <Col xs={6}>
          <button 
            className="btn btn-add"
            onClick={(e) => props.handleAddBtnClicked(e)}>{btnText}</button>
        </Col>
        <Col xs={6}>
          <button 
            onClick={(e) => props.handleEditBtnClicked(e)}
            className={'btn btn-edit ' + (props.showEditMode === true ? 'hide' : "")}>
              Edit
          </button>

          <button 
            onClick={(e) => props.handleDoneBtnClicked(e)}
            className={'btn btn-done ' + (props.showEditMode === true ? 'show' : "")}>
              Done
          </button>
        </Col>
      </Col>
    </div>
  );
}