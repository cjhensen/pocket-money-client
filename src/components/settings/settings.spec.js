import React from 'react';
import {shallow, mount} from 'enzyme';

import {SettingsContainer} from './';
import Settings from './settings';

describe('<SettingsContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<SettingsContainer />);
  });

  it('renders the settings logout button', () => {
    const wrapper = mount(<SettingsContainer />);
    expect(wrapper.find('#settings').length).toBe(1);
  });

  it('should fire the handleLogoutBtnClicked callback when the logout button is clicked', () => {
    const callback = jest.fn();

    const wrapper = mount(<Settings handleLogoutBtnClicked={callback} />);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

});