import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import FilteringSelect from '../components/FilteringSelect';
import Warning from '../components/Warning';
import '../styles/RoomChooser.css';

class RoomChooser extends Component {
  constructor(props) {
    super(props);
    this.state = { roomName: '', warningMsg: '' };
  }
  componentWillReceiveProps(nextProps) {
    const { displayName } = nextProps.userInfo;
    this.setState({ warningMsg: displayName ? '' : this.state.warningMsg });
  }
  getRoom() {
    const { roomName } = this.state;
    if (!roomName) return roomName;
    return this.props.rooms.find(room => room.indexOf(roomName) > -1);
  }
  setWarning() {
    this.setState({ warningMsg: 'User not logged in' });
  }
  render() {
    const { displayName } = this.props.userInfo;
    const existingRoom = this.getRoom();
    return (
      <div>
        {this.state.warningMsg && <Warning message={this.state.warningMsg} />}
        <p>Type room name, or select from list:</p>
        <FilteringSelect
          onChange={roomName => this.setState({ roomName })}
          options={this.props.rooms}
        />
        <div className="room-buttons">
          <button
            disabled={existingRoom}
            className={cs('room-buttons__btn', { 'room-buttons__btn--disabled': existingRoom })}
            onClick={() =>
              displayName ? this.props.createRoom(this.state.roomName) : this.setWarning()}
          >
            Create
          </button>
          <button
            disabled={!existingRoom}
            className={cs('room-buttons__btn', { 'room-buttons__btn--disabled': !existingRoom })}
            onClick={() =>
              displayName ? this.props.connectToRoom(this.state.roomName) : this.setWarning()}
          >
            Connect
          </button>
        </div>
      </div>
    );
  }
}

RoomChooser.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.string).isRequired,
  connectToRoom: PropTypes.func.isRequired,
  createRoom: PropTypes.func.isRequired,
  userInfo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
};

export default RoomChooser;
