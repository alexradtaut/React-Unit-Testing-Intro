import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../components/Input';
import { findByTestAttr, checkProps } from '../testUtils';

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('Input renders without errors', () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, 'component-input');
  expect(input.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});
