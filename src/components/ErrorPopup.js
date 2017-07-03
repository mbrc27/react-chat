import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/ErrorPopup.css';

const ErrorPopup = props =>
  (<CSSTransitionGroup
    transitionName="errorFade"
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
  >
    {props.error.message &&
      <div className="error-popup">
        <p className="error-popup__paragraph">
          {props.error.message}
        </p>
      </div>}
  </CSSTransitionGroup>);

ErrorPopup.propTypes = {
  error: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ErrorPopup;
