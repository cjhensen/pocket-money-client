import React from 'react';
import {connect} from 'react-redux';

// Components
import ListControls from './listControls';

// Actions
import {toggleAddPopup} from '../../actions';

export class ListControlsContainer extends React.Component {

  handleAddBtnClicked(e) {
    console.log('handleAddBtnClicked');
    this.props.dispatch(toggleAddPopup(true));
  }

  render() {
    return (
      <ListControls 
        btnText={this.props.btnText}
        handleAddBtnClicked={(e) => this.handleAddBtnClicked(e)} />
    );
  }
}

export default connect()(ListControlsContainer);