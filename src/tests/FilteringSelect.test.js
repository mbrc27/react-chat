/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import FilteringSelect from '../components/FilteringSelect';

it('renders without crashing', () => {
  const props = { options: [], onChange: () => '' };
  const div = document.createElement('div');
  ReactDOM.render(<FilteringSelect {...props} />, div);
});

it('should have 3 items in list', () => {
  const props = { options: ['1', '2', '3'], onChange: () => '' };
  const component = shallow(<FilteringSelect {...props} />);
  const listNode = component.find('ul.filtering-select__list');
  expect(listNode.children().length).toEqual(3);
});

it('list should be visible on input focus', () => {
  const props = { options: ['1', '2', '3'], onChange: () => '' };
  const component = shallow(<FilteringSelect {...props} />);
  component.setState({ dropDownVisible: true });
  const listNode = component.find('ul.filtering-select__list');
  expect(listNode.hasClass('filtering-select__list--hidden')).toBeFalsy();
});

it('list should be hidden on input focus (0 elements)', () => {
  const props = { options: [], onChange: () => '' };
  const component = shallow(<FilteringSelect {...props} />);
  component.setState({ dropDownVisible: true });
  const listNode = component.find('ul.filtering-select__list');
  expect(listNode.hasClass('filtering-select__list--hidden')).toBeTruthy();
});

it('list should list elements containing input value', () => {
  const props = { options: ['Test', 'Car', 'Carpet'], onChange: () => '' };
  const component = shallow(<FilteringSelect {...props} />);
  component.setState({ inputValue: 'Car' });
  const listNode = component.find('ul.filtering-select__list');
  expect(listNode.children().length).toEqual(2);
});
