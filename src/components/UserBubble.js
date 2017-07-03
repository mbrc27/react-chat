import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import '../styles/UserBubble.css';

const UserBubble = props =>
  (<div
    className={cs('user-bubble', {
      'user-bubble--small': props.small,
    })}
  >
    <img className="user-bubble__image" src={props.photoURL} alt="user profile" />
    <p className="user-bubble__name">
      {props.displayName}
    </p>
  </div>);
UserBubble.defaultProps = {
  small: false,
  photoURL: '/placeholder-user.png',
};

UserBubble.propTypes = {
  displayName: PropTypes.string.isRequired,
  photoURL: PropTypes.string,
  small: PropTypes.bool,
};

export default UserBubble;
