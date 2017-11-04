import React from 'react';
import {shallow, mount} from 'enzyme';

import {AppContainer} from './';

describe('<AppContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<AppContainer />);
  });

  it('renders the app', () => {
    const wrapper = mount(<AppContainer />);
    console.log(wrapper);
    expect(wrapper.find('.app').length).toBe(1);
  });

  xit('renders indexView if user is not logged in', () => {
    const wrapper = shallow(<AppContainer isLoggedIn={false} />);
    expect(wrapper.find('IndexView').length).toBe(1);
  });
});

// global.requestAnimationFrame = function(callback) {
//   setTimeout(callback, 0);
// };