import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { getMessages, postMessage, disconnectRoom } from '../actions/messagesActions';
import MessageBoard from '../components/MessageBoard';
import MessageInput from '../components/MessageInput';

export class ChatRoom extends Component {
  componentDidMount() {
    const { currentRoom } = this.props;
    if (currentRoom) this.props.getMessages(currentRoom);
  }
  componentDidUpdate() {
    this.scrollChatToBottom();
  }
  scrollChatToBottom() {
    this.messageBoardRef.scrollTop = this.messageBoardRef.scrollHeight;
  }
  render() {
    if (!this.props.currentRoom) {
      this.props.disconnectRoom(this.props.currentRoom);
      return <Redirect exact to="/" />;
    }
    return (
      <div>
        <MessageBoard
          messages={this.props.messages}
          messageBoardRef={el => (this.messageBoardRef = el)}
        />
        <MessageInput
          userInfo={this.props.userInfo}
          currentRoom={this.props.currentRoom}
          postMessage={this.props.postMessage}
          onFocus={() => this.scrollChatToBottom()}
        />
      </div>
    );
  }
}

ChatRoom.propTypes = {
  currentRoom: PropTypes.string.isRequired,
  messages: PropTypes.objectOf(PropTypes.object).isRequired,
  getMessages: PropTypes.func.isRequired,
  postMessage: PropTypes.func.isRequired,
  userInfo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
  disconnectRoom: PropTypes.func.isRequired,
};

const mapStateToProps = ({ rooms, messages, userInfo }) => ({
  currentRoom: rooms.current,
  messages,
  userInfo,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMessages, postMessage, disconnectRoom }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
