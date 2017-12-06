import React from 'react';
import {shallow, mount} from 'enzyme';

import IndexViewContainer from './';

describe('<IndexViewContainer />', () => {
  it('renders without crashing', () => {
    shallow(<IndexViewContainer currentView={'index'} />);
  });

  xit('renders the homepage', () => {
    const currentView = "index";
    const wrapper = mount(<IndexViewContainer currentView={currentView} />);
    expect(wrapper.find('#view-index').length).toBe(1);
  });
});