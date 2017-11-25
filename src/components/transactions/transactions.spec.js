import React from 'react';
import {shallow, mount} from 'enzyme';

import {TransactionsContainer} from './';

describe('<TransactionsContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<TransactionsContainer />);
  });

  
});