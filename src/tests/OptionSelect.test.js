/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import OptionSelect from '../components/OptionSelect';

const props = { roomName: '', mouseClick: sinon.spy() };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OptionSelect {...props} />, div);
});
it('calls callback after mouseDown', () => {
  const component = shallow(<OptionSelect {...props} />);
  component.find('div').simulate('mouseDown');
  expect(props.mouseClick.calledOnce).toEqual(true);
});
