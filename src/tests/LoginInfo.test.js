/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoginInfo from '../components/LoginInfo';
import GoogleLoginBtn from '../components/GoogleLoginBtn';
import UserBubble from '../components/UserBubble';

const props = {
  userInfo: { displayName: '', photoURL: '' },
  googleLogin: () => '',
  anonymousLogin: () => '',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginInfo {...props} />, div);
});

it('displays login button while unsigned', () => {
  const userInfo = { displayName: '', photoURL: 'http://placeskull.com/50/50/8D38C9' };
  const newProps = { ...props, userInfo };
  const component = shallow(<LoginInfo {...newProps} />);
  expect(component.contains(<GoogleLoginBtn onClick={newProps.googleLogin} />)).toEqual(true);
});

it('displays user bubble while signed in', () => {
  const userInfo = { displayName: 'Test User', photoURL: 'http://placeskull.com/50/50/8D38C9' };
  const newProps = { ...props, userInfo };
  const component = shallow(<LoginInfo {...newProps} />);
  expect(component.contains(<UserBubble {...newProps.userInfo} />)).toEqual(true);
});
