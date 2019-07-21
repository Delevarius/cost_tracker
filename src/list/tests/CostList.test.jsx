import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CostList from '../components/CostList';
import SingleItem from '../components/SingleItem';
import { itemsList } from '../../lib/mocked_constants';

configure({ adapter: new Adapter() });
describe('does page render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CostList
        itemsList= {itemsList}
      />
    );
  });  
  test('should shallow render component', () => {
    expect(wrapper).toBeTruthy();
  });
  test('should contain 3 items with the mocked data', () => {
    expect(wrapper.find(SingleItem).length).toBe(3);
  });
});
