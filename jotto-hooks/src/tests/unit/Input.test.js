import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../components/Input';
import { findByTestAttr } from '../testUtils';

const setup = () => {
  return shallow(<Input />);
};

test('Input renders without errors', () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, 'component-input');
  expect(input.length).toBe(1);
});
