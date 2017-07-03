import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GoogleLoginBtn.css';
import logo from '../assets/google-btn.svg';

const GoogleLoginBtn = props =>
  (<button className="google-login" onClick={() => props.onClick()}>
    <img className="google-login__logo" src={logo} alt="login button" />
    <p className="google-login__label">Login</p>
  </button>);

GoogleLoginBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoogleLoginBtn;
