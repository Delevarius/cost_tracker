import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('does page render', () => {
  test('should shallow render component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});
