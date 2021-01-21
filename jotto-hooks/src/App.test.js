import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr } from './tests/testUtils';
import App from './App';

const setup = () => {
  return shallow(<App />);
};
test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
