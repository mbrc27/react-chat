/* eslint-env jest */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import HomeContainer, { Home } from '../containers/Home';

let store;
let wrapper;
const initialState = {
  rooms: {
    all: [],
    current: '',
  },
  userInfo: { displayName: '' },
};
const mockStore = configureStore();

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = mount(
    <Provider store={store}>
      <HomeContainer store={store} />
    </Provider>,
  );
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<wrapper />, div);
});

it('renders room info', () => {
  const container = wrapper.find(HomeContainer);
  expect(container.find(Home).props().rooms).toEqual([]);
  expect(container.find(Home).props().currentRoom).toEqual('');
});
