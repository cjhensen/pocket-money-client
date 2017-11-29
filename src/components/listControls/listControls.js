import React from 'react';

import {Col, Row} from 'react-bootstrap';

// Assets
import './listControls.css';

export default function ListControls(props) {

  const btnText = props.btnText;

  return (
    <div className="list-controls">
      <Row>
        <Col xs={12}>
          <Col xs={(props.showEditBtn === true || props.showEditBtn === undefined ? 6 : 12)}>
            <button 
              className="btn btn-add"
              onClick={(e) => props.handleAddBtnClicked(e)}>{btnText}</button>
          </Col>
          <Col xs={6}
               className={(props.showEditBtn === true || props.showEditBtn === undefined ? 'show' : 'hide')}>
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
      </Row>
    </div>
  );
}