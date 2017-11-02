import React from 'react';
import {shallow, mount} from 'enzyme';

import {IndexView} from './IndexView';

describe('<IndexView />', () => {
  it('renders without crashing', () => {
    shallow(<IndexView />);
  });
});