import React from 'react';
import {shallow, mount} from 'enzyme';

import {App} from './app';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the app', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper);
    expect(wrapper.find('.app').length).toBe(1);
  });

  xit('renders indexView if user is not logged in', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find('IndexView').length).toBe(1);
  });
});

// global.requestAnimationFrame = function(callback) {
//   setTimeout(callback, 0);
// };