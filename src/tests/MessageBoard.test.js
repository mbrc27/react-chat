/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';
import MessageBoard from '../components/MessageBoard';
import Message from '../components/Message';

const props = {
  messages: {
    key1: {
      username: 'Test',
      message: 'hello',
      timestamp: Date.now(),
    },
    key2: {
      username: 'Test2',
      message: 'hello2',
      timestamp: Date.now() - moment().add(1, 'days').unix(),
    },
  },
  messageBoardRef: sinon.spy(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageBoard {...props} />, div);
});

it('renders messages', () => {
  const component = shallow(<MessageBoard {...props} />);
  expect(component.find(Message).length).toEqual(Object.keys(props.messages).length);
});

it('sort messages by timestamp', () => {
  const component = shallow(<MessageBoard {...props} />);
  expect(component.find(Message).first().props().username).toEqual('Test2');
});
