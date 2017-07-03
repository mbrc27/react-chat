import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import '../styles/AnonymousLogin.css';

class AnonymousLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }
  onChange(evt) {
    this.setState({ userName: evt.target.value });
  }
  render() {
    return (
      <div className="anonymous-login">
        <input
          type="text"
          className="anonymous-login__input"
          placeholder="Type username"
          value={this.state.userName}
          onChange={evt => this.onChange(evt)}
        />
        <button
          className={cs('anonymous-login__btn', {
            'anonymous-login__btn--disabled': !this.state.userName,
          })}
          onClick={() =>
            this.props.onClick({
              displayName: this.state.userName,
            })}
          disabled={!this.state.userName}
        >
          Login
        </button>
      </div>
    );
  }
}

AnonymousLogin.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AnonymousLogin;
