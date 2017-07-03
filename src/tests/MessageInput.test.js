/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import MessageInput from '../components/MessageInput';

const props = {
  userInfo: { displayName: '', photoURL: '' },
  postMessage: sinon.spy(),
  onFocus: sinon.spy(),
  currentRoom: '',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageInput {...props} />, div);
});

it('call postMessage after click', () => {
  const component = mount(<MessageInput {...props} />);
  const btnNode = component.find('form');
  btnNode.simulate('submit');
  expect(props.postMessage.calledOnce).toEqual(true);
});

it('call onFocus after input focus', () => {
  const component = mount(<MessageInput {...props} />);
  const inputNode = component.find('textarea');
  inputNode.simulate('focus');
  expect(props.onFocus.calledOnce).toEqual(true);
});

it('should change state after input change', () => {
  const component = shallow(<MessageInput {...props} />);
  const inputNode = component.find('textarea');
  inputNode.simulate('change', { target: { value: 'Hello' } });
  expect(component.state().message).toEqual('Hello');
});
