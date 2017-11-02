import React from 'react';
import {shallow, mount} from 'enzyme';

import NavBar from './navBar';

describe('<NavBar />', () => {

  const navElements = [
      "overview",
      "transactions",
      "categories",
      "insights",
      "settings"
    ];

  it('Renders without crashing', () => {
    shallow(<NavBar navElements={navElements} />);
  });

  it('renders the nav-container initially', () => {
    const wrapper = shallow(<NavBar navElements={navElements} />);
    expect(wrapper.find('#nav-container').length).toBe(1);
  });

  it('should display the proper className for each element', () => {
    const wrapper = shallow(<NavBar navElements={navElements} />);
    expect(wrapper.find('.nav-icon .overview').length).toBe(1);
    expect(wrapper.find('.nav-icon .transactions').length).toBe(1);
    expect(wrapper.find('.nav-icon .categories').length).toBe(1);
    expect(wrapper.find('.nav-icon .insights').length).toBe(1);
    expect(wrapper.find('.nav-icon .settings').length).toBe(1);
    expect(wrapper.find('.nav-text').length).toBe(5);
  });
});