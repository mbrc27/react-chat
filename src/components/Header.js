import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = props =>
  (<header className="header">
    <Link to="/" className="header__link">
      <span role="button" tabIndex="0" onClick={props.onReturnToHome}>
        Home
      </span>
    </Link>
  </header>);
Header.propTypes = {
  onReturnToHome: PropTypes.func.isRequired,
};
export default Header;
