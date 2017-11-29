import React from 'react';
import {Col} from 'react-bootstrap';

import './settings.css';

export default function Settings(props) {
  return (
    <div id="settings" className="view-wrap">
      <Col xs={8} xsOffset={2} md={4} mdOffset={4}>
        <button onClick={e => props.handleLogoutBtnClicked(e)} className="btn btn-logout">Logout</button>
      </Col>
    </div>
  );
}