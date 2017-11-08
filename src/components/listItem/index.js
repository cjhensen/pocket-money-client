import React from 'react';
import {connect} from 'react-redux';
import {deleteSelectedItem} from '../../actions';

// Components
import ListItemFactory from './listItemFactory';

export class ListItemContainer extends React.Component {
  // const listItemType = props.listItemType;
  // const listItem = props.listItem;


  assignEventHandlers() {
    const itemEventHandlers = {
      handleItemRemoveBtnClicked: this.handleItemRemoveBtnClicked,
      handleItemEditBtnClicked: this.handleItemEditBtnClicked
    };
    
    return itemEventHandlers;
  }


  handleItemRemoveBtnClicked(e) {
    console.log('handleItemRemoveBtnClicked');
    const selectedItem = this.getListItemValues(e.currentTarget.closest('.category'));
    console.log('selectedItem', selectedItem);

    this.props.dispatch(deleteSelectedItem(selectedItem));
  }

  handleItemEditBtnClicked(e) {
    console.log('handleItemEditBtnClicked');
  }

  getListItemValues(item) {
    const categoryLabel = item.getElementsByClassName('category-label')[0].textContent;
    const categoryTotal = Number(parseFloat(item.getElementsByClassName('category-total')[0].textContent.replace("$", ""), 10).toFixed(2));

    return {'categoryName': categoryLabel, 'totalBudget': categoryTotal};
  }

  // const builtListItem = ListItemFactory.build(props.listItemType, props.listItem, this.assignEventHandlers);

  render() {
    return ListItemFactory.build(this.props.listItemType, this.props.listItem, this.assignEventHandlers());
  }
}

const mapStateToProps = state => ({
  currentView: state.currentView
});
export default connect(mapStateToProps)(ListItemContainer);