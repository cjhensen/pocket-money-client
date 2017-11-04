import React from 'react';
import {shallow, mount} from 'enzyme';

import AuthContainer from './';

describe('<Auth />', () => {
  it('renders without crashing', () => {
    shallow(<AuthContainer authView={'signup'} />);
  });

  it('should render the signup component', () => {
    const wrapper = mount(<AuthContainer authView={'signup'} />);
    expect(wrapper.find('#sign-up').length).toBe(1);
  });

  it('should render the login component', () => {
    const wrapper = mount(<AuthContainer authView={'login'} />);
    expect(wrapper.find('#log-in').length).toBe(1);
  });
});