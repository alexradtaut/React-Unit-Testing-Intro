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

describe('state controlled input', () => {
  let wrapper,
    mockSetCurrentGuess = jest.fn();
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });
  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  test('state updates with empty string upon submit', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} }),
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
