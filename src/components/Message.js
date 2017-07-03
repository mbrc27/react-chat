import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import UserBubble from './UserBubble';
import '../styles/Message.css';

const Message = props =>
  (<div className="message">
    <div className="message__content">
      <UserBubble small displayName={props.username} photoURL={props.photoURL} />
      <p className="message__paragraph">
        {props.message}
      </p>
    </div>
    <p className="message__timestamp">
      {Date.now() - moment().add(1, 'days').unix() < props.timestamp
        ? moment(props.timestamp).fromNow()
        : moment(props.timestamp).format('Do MMM YY')}
    </p>
  </div>);

Message.defaultProps = {
  photoURL: '/placeholder-user.png',
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  photoURL: PropTypes.string,
};

export default Message;
