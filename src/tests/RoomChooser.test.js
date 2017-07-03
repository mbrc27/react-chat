/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RoomChooser from '../components/RoomChooser';

const props = {
  rooms: ['test', 'test2'],
  userInfo: { displayName: 'Test user' },
  connectToRoom: sinon.spy(),
  createRoom: sinon.spy(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoomChooser {...props} />, div);
});

it('creates to room while create is clicked', () => {
  const component = shallow(<RoomChooser {...props} />);
  component.find('button.room-buttons__btn')
  .first()
  .simulate('click');
  expect(props.createRoom.calledOnce).toEqual(true);
});

it('connects to room while connect is clicked', () => {
  const component = shallow(<RoomChooser {...props} />);
  component.find('button.room-buttons__btn')
  .last()
  .simulate('click');
  expect(props.createRoom.calledOnce).toEqual(true);
});
