import React from 'react';
import {connect} from 'react-redux';

// Components
import ListControls from './listControls';

// Actions
import {toggleAddPopup, toggleEditMode} from '../../actions';

export class ListControlsContainer extends React.Component {

  handleAddBtnClicked(e) {
    console.log('handleAddBtnClicked');
    this.props.dispatch(toggleAddPopup(true));
  }

  handleEditBtnClicked(e) {
    console.log('handleEditBtnClicked');
    this.props.dispatch(toggleEditMode(true));
  };

  handleDoneBtnClicked(e) {
    console.log('handleDoneBtnClicked');
    this.props.dispatch(toggleEditMode(false));
  }

  render() {
    return (
      <ListControls 
        btnText={this.props.btnText}
        handleAddBtnClicked={(e) => this.handleAddBtnClicked(e)}
        handleEditBtnClicked={(e) => this.handleEditBtnClicked(e)}
        handleDoneBtnClicked={(e) => this.handleDoneBtnClicked(e)}
        showEditMode={this.props.showEditMode} />
    );
  }
}

const mapStateToProps = state => ({
  showEditMode: state.editMode.isActive
});
export default connect(mapStateToProps)(ListControlsContainer);