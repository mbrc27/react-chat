import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Warning.css';

const Warning = props =>
  (<div className="warning">
    <p>
      {props.message}
    </p>
  </div>);

Warning.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Warning;
