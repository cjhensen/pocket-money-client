import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddListItemPopupContainer} from './';

describe('<AddListItemPopupContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<AddListItemPopupContainer />);
  });

  it('renders the category popup', () => {
    const listItemType = 'category';
    const wrapper = mount(<AddListItemPopupContainer isDisplayed={true} listItemType={listItemType} />);
    expect(wrapper.find('#add-list-item-popup-container').length).toBe(1);
  });

  it('renders the transaction popup', () => {
    const listItemType = 'transaction';
    const categories = [
      {
        categoryName: 'testCat',
        totalBudget: 200,
        id: '1q2w3e4r5t'
      }
    ];
    const wrapper = mount(<AddListItemPopupContainer isDisplayed={true} listItemType={listItemType} categories={categories} />);
    expect(wrapper.find('#add-list-item-popup-container').length).toBe(1);
  });

  it('renders the income popup', () => {
    const listItemType = 'income';
    const wrapper = mount(<AddListItemPopupContainer isDisplayed={true} listItemType={listItemType} />);
    expect(wrapper.find('#add-list-item-popup-container').length).toBe(1);
  });
});