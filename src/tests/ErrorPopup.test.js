/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ErrorPopup from '../components/ErrorPopup';

it('renders without crashing', () => {
  const props = { error: { message: 'Error message' } };
  const div = document.createElement('div');
  ReactDOM.render(<ErrorPopup {...props} />, div);
});
it('shows error message', () => {
  const props = { error: { message: 'Error message' } };
  const component = shallow(<ErrorPopup {...props} />);
  const errorNode = component.find('p.error-popup__paragraph');
  expect(errorNode.text()).toEqual(props.error.message);
});
