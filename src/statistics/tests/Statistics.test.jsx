import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Statistics from '../components/Statistics';
import { itemsList, categories } from '../../lib/mocked_constants';

configure({ adapter: new Adapter() });
describe('does page render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Statistics
        itemsList= {itemsList}
        categories={categories}
      />
    );
  });  
  test('should mount render component', () => {
    expect(wrapper).toBeTruthy();
  });
  test('should render a total of 66', () => {
    expect(wrapper.find('.total_cost').text()).toEqual('Total:66');
  });
});
