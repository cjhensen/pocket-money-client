import React from 'react';
import {shallow, mount} from 'enzyme';

import HeaderContainer from './';

describe('<HeaderContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<HeaderContainer />);
  });

  it('does not render header if currentView is "categories"', () => {
    const currentView = "categories";
    const wrapper = mount(<HeaderContainer currentView={currentView} />);
    expect(wrapper.find('#header').length).toBe(0);
  });
});

it('renders the header if the currentView is not "categories"', () => {
  const currentView = "overview";
  const wrapper = mount(<HeaderContainer currentView={currentView} />);
  expect(wrapper.find('#header').length).toBe(1);
});