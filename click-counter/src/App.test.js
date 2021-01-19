import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);
test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

test('clicking on increment button increments counter display by 1', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('clicking on decrement button decrements counter display by 1', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

test('Error is shown if counter should go below 0 and counter stays at 0', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.hasClass('error')).toBe(true);
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

test('Error disapears when the increment button is clicked', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.hasClass('hidden')).toBe(true);
});
