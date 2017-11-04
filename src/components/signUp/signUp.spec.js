import React from 'react';
import {shallow, mount} from 'enzyme';

import SignUp from './';

describe('<SignUp />', () => {
  it('renders without crashing', () => {
    shallow(<SignUp />);
  });
});