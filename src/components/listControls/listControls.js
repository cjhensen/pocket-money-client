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
          <button className="btn btn-add">{btnText}</button>
        </Col>
        <Col xs={6}>
          <button className="btn btn-edit">Edit</button>
        </Col>
      </Col>
    </div>
  );
}