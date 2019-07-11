import React from 'react';
import { shallow } from 'enzyme';

import ItemCreation from '../components/ItemCreation';

describe('ConfirmationDialog tests', () => {
  test('should shallow render component', () => {
    const wrapper = shallow(<ItemCreation />);
    expect(wrapper).toBeTruthy();
  });
});
