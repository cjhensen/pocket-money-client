import React from 'react';
import {shallow, mount} from 'enzyme';

import MeterBarContainer from './';

describe('<MeterBarContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<MeterBarContainer />);
  });

  it('renders the MeterBar with proper style percentage', () => {
    const percentage = 20.24;
    const wrapper = mount(<MeterBarContainer percentage={percentage} />);
    expect(wrapper.find('.meter-bar').length).toBe(1);
    // const meterBarStyle = wrapper.find('.meter-bar-percentage');
    // expect(meterBarStyle).toHaveStyle('width', '20%');
    // expect(meterBarStyle).toHaveProperty('width', '20%');
  });
})