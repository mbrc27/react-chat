import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { getRooms, setCurrentRoom, createRoom } from '../actions/roomsActions';
import { googleLogin, getGoogleToken, anonymousLogin } from '../actions/loginActions';
import RoomChooser from '../components/RoomChooser';
import LoginInfo from '../components/LoginInfo';
import '../styles/Home.css';

export class Home extends Component {
  componentDidMount() {
    this.props.getRooms();
    if (!this.props.userInfo.displayName) this.props.getGoogleToken();
  }
  render() {
    if (this.props.currentRoom) {
      return <Redirect exact to="/room" />;
    }
    return (
      <div className="home">
        <LoginInfo
          userInfo={this.props.userInfo}
          googleLogin={this.props.googleLogin}
          anonymousLogin={this.props.anonymousLogin}
        />
        <RoomChooser
          connectToRoom={roomName => this.props.setCurrentRoom(roomName)}
          createRoom={roomName => this.props.createRoom(roomName)}
          userInfo={this.props.userInfo}
          rooms={this.props.rooms || []}
        />
      </div>
    );
  }
}

Home.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.string).isRequired,
  userInfo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
  currentRoom: PropTypes.string.isRequired,
  getRooms: PropTypes.func.isRequired,
  setCurrentRoom: PropTypes.func.isRequired,
  createRoom: PropTypes.func.isRequired,
  googleLogin: PropTypes.func.isRequired,
  getGoogleToken: PropTypes.func.isRequired,
  anonymousLogin: PropTypes.func.isRequired,
};

const mapStateToProps = ({ rooms, userInfo }) => ({
  rooms: rooms.all,
  currentRoom: rooms.current,
  userInfo,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getRooms, setCurrentRoom, createRoom, googleLogin, getGoogleToken, anonymousLogin },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
