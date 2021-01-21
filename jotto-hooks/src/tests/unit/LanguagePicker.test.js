import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../testUtils';
import LanguagePicker from '../../components/LanguagePicker';

const mockSetLanguage = jest.fn();
const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
};

test('renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-picker');
  expect(component.exists()).toBe(true);
});

test('does not throw warning with expected props', () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() });
});

test('renders non-zero language icons', () => {});

test('calls setLanguage prop upon click', () => {});
