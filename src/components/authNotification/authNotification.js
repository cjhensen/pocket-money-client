import React from 'react';

import './authNotification.css';

export default function AuthNotification(props) {
  return (
    <div className="auth-notification">
      {props.message}
    </div>
  );
}