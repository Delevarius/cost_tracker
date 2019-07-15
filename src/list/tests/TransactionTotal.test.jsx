import React from 'react';
import { shallow } from 'enzyme';
import TransactionTotal from '../components/TransactionTotal';

describe('does page render', () => {
  test('should shallow render component', () => {
    const wrapper = shallow(<TransactionTotal />);
    expect(wrapper).toBeTruthy();
  });
});
