import React from 'react';
import {connect} from 'react-redux';

// Components
import ListControls from './listControls';

export default class ListControlsContainer extends React.Component {

  render() {
    return (
      <ListControls btnText={this.props.btnText} />
    );
  }
}