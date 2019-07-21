import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import App from '../App';

describe('does page render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('should shallow render component', () => {
    console.log(wrapper)
    expect(wrapper).toBeTruthy();
  });
});
