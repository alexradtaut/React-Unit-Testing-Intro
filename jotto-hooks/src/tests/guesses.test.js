import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from './testUtils';

import successContext from '../contexts/successContext';
import Input from '../components/Input';
import { findAllByAltText } from '@testing-library/react';

function setup(secretWord = 'party') {
  const wrapper = mount(
    <successContext.SuccessProvider>
      <Input secretWord={secretWord} />
    </successContext.SuccessProvider>
  );
  const inputBox = findByTestAttr(wrapper, 'input-box');
  const submitButton = findByTestAttr(wrapper, 'submit-button');

  return [wrapper, inputBox, submitButton];
}

describe('test word guesses', () => {
  let wrapper, inputBox, submitButton;

  beforeEach(() => {
    [wrapper, inputBox, submitButton] = setup('party');
  });
  describe('correct guess', () => {
    beforeEach(() => {
      const mockEvent = { target: { value: 'party' } };
      inputBox.simulate('change', mockEvent);
      inputBox.simulate('click');
    });
    test('input component contains no childer', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.children().length).toBe(0);
    });
  });
  describe('incorrect guess', () => {
    beforeEach(() => {
      const mockEvent = { target: { value: 'train' } };
      inputBox.simulate('change', mockEvent);
      inputBox.simulate('click');
    });
    test('Input Box remains', () => {
      expect(inputBox.exists()).toBe(true);
    });
  });
});
