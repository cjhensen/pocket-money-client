import React from 'react';
import {shallow, mount} from 'enzyme';

import LogIn from './';

describe('<LogIn />', () => {
  it('renders without crashing', () => {
    shallow(<LogIn />);
  });

  it('renders the login form', () => {
    const wrapper = mount(<LogIn />);
    expect(wrapper.find('#log-in').length).toBe(1);
  });
});