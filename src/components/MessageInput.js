import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserBubble from './UserBubble';
import '../styles/MessageInput.css';
import sendLogo from '../assets/send.svg';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }
  onSubmitMessage(evt) {
    evt.preventDefault();
    this.props.postMessage({
      roomId: this.props.currentRoom,
      username: this.props.userInfo.displayName,
      photoURL: this.props.userInfo.photoURL,
      message: this.state.message,
    });
    this.setState({ message: '' });
  }
  render() {
    return (
      <form className="message-input" onSubmit={evt => this.onSubmitMessage(evt)}>
        <UserBubble
          displayName={this.props.userInfo.displayName}
          photoURL={this.props.userInfo.photoURL}
        />
        <textarea
          className="message-input__input"
          name="message"
          value={this.state.message}
          onChange={evt => this.setState({ message: evt.target.value })}
          onFocus={this.props.onFocus}
        />
        <button type="submit" className="message-input__button">
          <img src={sendLogo} alt="Send button logo" />
        </button>
      </form>
    );
  }
}

MessageInput.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
  postMessage: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  currentRoom: PropTypes.string.isRequired,
};

export default MessageInput;
