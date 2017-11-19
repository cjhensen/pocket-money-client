import React from 'react';
import {Col} from 'react-bootstrap';

import './header.css';

export default function Header(props) {
  return (
    <div id="header">
      <Col xs={12}>
        {props.title}
      </Col>
    </div>
  );
}