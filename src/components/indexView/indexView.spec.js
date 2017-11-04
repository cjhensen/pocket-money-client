import React from 'react';
import {shallow, mount} from 'enzyme';

import IndexViewContainer from './';

describe('<IndexViewContainer />', () => {
  it('renders without crashing', () => {
    shallow(<IndexViewContainer currentView={'index'} />);
  });
});