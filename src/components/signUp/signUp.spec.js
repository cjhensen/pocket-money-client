import React from 'react';
import {shallow, mount} from 'enzyme';

import SignUp from './';

describe('<SignUp />', () => {
  it('renders without crashing', () => {
    shallow(<SignUp />);
  });

  it('renders the sign up form', () => {
    const wrapper = mount(<SignUp />);
    expect(wrapper.find("#sign-up").length).toBe(1);
  });
});