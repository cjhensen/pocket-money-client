import React from 'react';
import {shallow, mount} from 'enzyme';

import NavBar from './';

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

  it('should fire the changeView callback when a link is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<NavBar navElements={navElements} currentView={'overview'} changeView={callback} />);
    wrapper.find('button.active').simulate('click');
    expect(callback).toHaveBeenCalledWith('overview');
  });

  xit('should change the active class to the active views corresponding nav element', () => {
    const navElements = [
      "overview",
      "transactions",
      "categories",
      "insights",
      "settings"
    ];
    let currentView = 'overview';
    const callback = jest.fn();
    const wrapper = mount(<NavBar navElements={navElements} currentView={currentView} changeView={callback} />);
    const button = wrapper.find('button.active');
    const buttonText = button.find('.nav-text');
    // expect(buttonText.text()).toEqual('overview');
    wrapper.find('button').at(1).simulate('click');
    currentView = 'transactions';
    expect(callback).toHaveBeenCalledWith('transactions');
    // expect(wrapper.find('a.active .nav-text').text()).toEqual('transactions');
    const currentButton = wrapper.find('button.active');
    const currentButtonText = currentButton.find('.nav-text');
    expect(currentButtonText.text()).toEqual('transactions');
  });
});