/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import GoogleLoginBtn from '../components/GoogleLoginBtn';

it('renders without crashing', () => {
  const props = { onClick: () => '' };
  const div = document.createElement('div');
  ReactDOM.render(<GoogleLoginBtn {...props} />, div);
});
it('runs deilvered callback after click', () => {
  const props = { onClick: sinon.spy() };
  const component = shallow(<GoogleLoginBtn {...props} />);
  const btnNode = component.find('button');
  btnNode.simulate('click');
  expect(props.onClick.calledOnce).toEqual(true);
});
