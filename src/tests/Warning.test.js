/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Warning from '../components/Warning';

const props = { message: 'Warning message' };
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Warning {...props} />, div);
});

it('shows warning message', () => {
  const component = shallow(<Warning {...props} />);
  const warnNode = component.find('p');
  expect(warnNode.text()).toEqual(props.message);
});
