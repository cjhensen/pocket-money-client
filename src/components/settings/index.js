import React from 'react';

import {connect} from 'react-redux';

import Settings from './settings';

import {logout} from '../../actions';

export class SettingsContainer extends React.Component {

  handleLogoutBtnClicked(e) {
    console.log('handleLogoutBtnClicked');
    this.props.dispatch(logout());
  }

  render() {
    return (
      <Settings handleLogoutBtnClicked={e => this.handleLogoutBtnClicked(e)} />
    );
  }
}

export default connect()(SettingsContainer);