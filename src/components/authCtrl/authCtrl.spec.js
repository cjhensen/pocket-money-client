import React from 'react';
import {shallow, mount} from 'enzyme';

import AuthCtrl from './AuthCtrl';

describe('<AuthCtrl />', () => {
  it('renders without crashing', () => {
    shallow(<AuthCtrl />);
  });

  it('should render the signup component', () => {
    const wrapper = mount(<AuthCtrl authView={'signup'} />);
    expect(wrapper.find('#sign-up').length).toBe(1);
  });

  it('shouldl render the login component', () => {
    const wrapper = mount(<AuthCtrl authView={'login'} />);
    expect(wrapper.find('#log-in').length).toBe(1);
  });
});