import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Message from '../components/Message';
import '../styles/MessageBoard.css';

const MessageBoard = props => (
  <div className="message-board" ref={props.messageBoardRef}>
    <CSSTransitionGroup
      transitionName="messageFade"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {Object.keys(props.messages)
          .map(key => props.messages[key])
          .sort((a, b) => a.timestamp - b.timestamp)
          .map(msg => <Message {...msg} key={msg.timestamp} />)}
    </CSSTransitionGroup>
  </div>
  );

MessageBoard.propTypes = {
  messages: PropTypes.objectOf(PropTypes.object).isRequired,
  messageBoardRef: PropTypes.func.isRequired,
};

export default MessageBoard;
