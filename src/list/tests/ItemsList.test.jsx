import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from '../components/ItemsList';
describe('does page render', () => {
  test('should shallow render component', () => {
    const wrapper = shallow(<ItemsList />);
    expect(wrapper).toBeTruthy();
  });
});
