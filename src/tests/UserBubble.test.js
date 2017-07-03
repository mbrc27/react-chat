/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import UserBubble from '../components/UserBubble';

it('renders without crashing', () => {
  const props = { displayName: '', photoURL: '' };
  const div = document.createElement('div');
  ReactDOM.render(<UserBubble {...props} />, div);
});
it('renders small version while small prop', () => {
  const props = { displayName: '', photoURL: '', small: true };
  const component = shallow(<UserBubble {...props} />);
  const wrapNode = component.find('div.user-bubble');
  expect(wrapNode.hasClass('user-bubble--small')).toBeTruthy();
});
