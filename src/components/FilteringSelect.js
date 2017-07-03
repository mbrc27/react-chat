import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import OptionSelect from './OptionSelect';
import '../styles/FilteringSelect.css';

class FilteringSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVisible: false,
      inputValue: '',
    };
  }
  onInputChange(value) {
    this.setState({ inputValue: value });
    this.props.onChange(value);
  }
  render() {
    const options = this.props.options.filter(
      option => (this.state.inputValue ? option.indexOf(this.state.inputValue) > -1 : true),
    );
    return (
      <div className="filtering-select">
        <input
          className="filtering-select__input"
          type="text"
          value={this.state.inputValue}
          onChange={evt => this.onInputChange(evt.target.value)}
          onFocus={() => this.setState({ dropDownVisible: true })}
          onBlur={() => this.setState({ dropDownVisible: false })}
        />
        <div className="filtering-select__list-wrapper">
          <ul
            className={cs('filtering-select__list', {
              'filtering-select__list--hidden': !this.state.dropDownVisible || !options.length,
            })}
          >
            {options.map(roomName =>
              (<li className="filtering-select__list-item" key={roomName}>
                <OptionSelect mouseClick={() => this.onInputChange(roomName)} roomName={roomName} />
              </li>),
            )}
          </ul>
        </div>
      </div>
    );
  }
}

FilteringSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilteringSelect;
