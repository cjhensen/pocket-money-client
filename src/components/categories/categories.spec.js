import React from 'react';
import {shallow, mount} from 'enzyme';

import {CategoriesContainer} from './';
import Categories from './categories';

describe('<CategoriesContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<CategoriesContainer />);
  });

  it('renders the categories visual component', () => {
    const wrapper = shallow(<CategoriesContainer />);
    expect(wrapper.find('Categories').length).toBe(1);
  });

});

describe('<Categories />', () => {
  it('renders the categories component', () => {
    const listItems = [
      {
        "totalBudget" : 12,
        "id" : "Bk-dSTXMxG",
        "categoryName" : "rtew"
      }
    ];

    const wrapper = shallow(<Categories listItems={listItems} />);
    expect(wrapper.find('#categories').length).toBe(1);
  });
});