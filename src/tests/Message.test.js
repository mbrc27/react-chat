/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { shallow } from 'enzyme';
import Message from '../components/Message';

it('renders without crashing', () => {
  const props = { message: 'Test', username: 'TestUser', timestamp: Date.now() };
  const div = document.createElement('div');
  ReactDOM.render(<Message {...props} />, div);
});
it('parses timestamp within 24h as text', () => {
  const props = { message: 'Test', username: 'TestUser', timestamp: Date.now() };
  const component = shallow(<Message {...props} />);
  const timeNode = component.find('p.message__timestamp');
  expect(timeNode.text()).toEqual('a few seconds ago');
});
it('parses timestamp over 24h as date', () => {
  const yesterday = Date.now() - moment().add(1, 'days').unix();
  const yesterdayFormated = moment(yesterday).format('Do MMM YY');
  const props = { message: 'Test', username: 'TestUser', timestamp: yesterday };
  const component = shallow(<Message {...props} />);
  const timeNode = component.find('p.message__timestamp');
  expect(timeNode.text()).toEqual(yesterdayFormated);
});
