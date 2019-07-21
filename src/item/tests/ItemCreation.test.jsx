import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemCreation from '../components/ItemCreation';
import { categories } from '../../lib/mocked_constants';

configure({ adapter: new Adapter() });
describe('does page render', () => {
  let wrapper;
  const updateCategory = jest.fn();
  const updateNote = jest.fn();
  const updateCost = jest.fn();
  const saveItem = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <ItemCreation
        note={''}
        cost={0}
        categories={categories}
        category={categories[0]}
        updateCategory={updateCategory}
        updateNote={updateNote}
        updateCost={updateCost}
        saveItem={saveItem}
      />
    );
  });  
  test('should mount render component', () => {
    expect(wrapper).toBeTruthy();
  });
  test('should render 3 inputs', () => {
    const noteInput = wrapper.find('.note_input');
    const categoryInput = wrapper.find('.category_input');
    const costInput = wrapper.find('.cost_input');
    const saveButton = wrapper.find('.save_item');
    expect(noteInput).toBeTruthy();
    expect(categoryInput).toBeTruthy();
    expect(costInput).toBeTruthy();
    expect(saveButton).toBeTruthy();
  });
  test('should call updateNote', () => {
    wrapper
      .find('.note_input')
      .simulate('change', { target: { value: 'note' } });
    expect(updateNote.mock.calls.length).toEqual(1);
  });
  test('should call updateCost', () => {
    wrapper
      .find('.cost_input')
      .simulate('change', { target: { value: 1988 } });
    expect(updateCost.mock.calls.length).toEqual(1);
  });
  test('on click should call saveItem', () => {
    wrapper
      .find('.save_item')
      .simulate('click');
    expect(saveItem.mock.calls.length).toEqual(1);
  });
});
