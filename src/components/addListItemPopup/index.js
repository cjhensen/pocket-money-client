import React from 'react';
import {connect} from 'react-redux';

// Components
import CategoryPopup from './popups/categoryPopup';
import TransactionPopup from './popups/transactionPopup';

// Assets
import './addListItemPopup.css';

// Actions
import {toggleAddPopup} from '../../actions';

export class AddListItemPopupContainer extends React.Component {

  displayPopup() {
    switch(this.props.listItemType) {
      case 'category':
        return <CategoryPopup />;
      case 'transaction':
        return <TransactionPopup />;
      case 'income':
        return <div>income popup</div>;
      default:
        return null;
    }
  }

  handleClosePopupBtnClicked(e) {
    console.log('handleClosePopupBtnClicked');
    this.props.dispatch(toggleAddPopup(false));
  }

  render() {
    if(this.props.isDisplayed) {
      const popup = this.displayPopup();

      return (
        <div id="add-list-item-popup-container">
          <div className="add-item">
            <span 
              className="close-popup"
              onClick={(e) => this.handleClosePopupBtnClicked(e)}>x</span>
            {popup}
          </div>
        </div>
      );

    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  isDisplayed: state.addListItemPopup.isDisplayed
});
export default connect(mapStateToProps)(AddListItemPopupContainer);