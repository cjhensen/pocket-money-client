import React from 'react';
import {shallow, mount} from 'enzyme';

import {IndexView} from './indexView';

describe('<IndexView />', () => {
  it('renders without crashing', () => {
    shallow(<IndexView />);
  });
});