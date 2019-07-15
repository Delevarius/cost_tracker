import React from 'react';
import { shallow } from 'enzyme';

import ItemCreation from '../components/ItemCreation';

describe('ItemCreation tests', () => {
  test('should shallow render component', () => {
    const wrapper = shallow(<ItemCreation />);
    expect(wrapper).toBeTruthy();
  });
});
