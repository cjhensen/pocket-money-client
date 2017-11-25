import React from 'react';
import {shallow, mount} from 'enzyme';

import {ListControlsContainer} from './';

describe('<ListControlsContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<ListControlsContainer />);
  });

  it('renders the correct list controls with edit mode off', () => {
    const btnText = "Button Text";
    const showEditMode = false;
    const showEditBtn = false;
    const wrapper = mount(<ListControlsContainer 
                            btnText={btnText} 
                            showEditMode={showEditMode} 
                            showEditBtn={showEditBtn} />);
    expect(wrapper.find('.list-controls').length).toBe(1);
    expect(wrapper.find('.btn-add').length).toBe(1);
    expect(wrapper.find('.btn-edit').length).toBe(1);
  });

  it('renders the correct list controls with edit mode on', () => {
    const btnText = "Button Text";
    const showEditMode = true;
    const showEditBtn = true;
    const wrapper = mount(<ListControlsContainer 
                            btnText={btnText} 
                            showEditMode={showEditMode} 
                            showEditBtn={showEditBtn} />);
    expect(wrapper.find('.list-controls').length).toBe(1);
    expect(wrapper.find('.btn-add').length).toBe(1);
    expect(wrapper.find('.btn-done').length).toBe(1);
  });

});