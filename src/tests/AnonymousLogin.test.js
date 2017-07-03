/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import AnonymousLogin from '../components/AnonymousLogin';

const props = { onClick: sinon.spy() };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnonymousLogin {...props} />, div);
});

it('calls callback while button clicked', () => {
  const component = shallow(<AnonymousLogin {...props} />);
  component.find('button').simulate('click');
  expect(props.onClick.calledOnce).toEqual(true);
});
