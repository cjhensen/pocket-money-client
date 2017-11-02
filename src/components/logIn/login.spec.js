import React from 'react';
import {shallow, mount} from 'enzyme';

import LogIn from './logIn';

describe('<LogIn />', () => {
  it('renders without crashing', () => {
    shallow(<LogIn />);
  });
});