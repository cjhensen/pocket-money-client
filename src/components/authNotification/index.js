import React from 'react';
import AuthNotification from './authNotification';

export default function AuthNotificationContainer(props) {
  if(props.message) {
    return (
    <AuthNotification 
      message={props.message} 
    />
    );
  } else {
    return null;
  }
}