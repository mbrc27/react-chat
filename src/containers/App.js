import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { setCurrentRoom } from '../actions/roomsActions';
import { disconnectRoom } from '../actions/messagesActions';
import Header from '../components/Header';
import ErrorPopup from '../components/ErrorPopup';
import Routes from '../Routes';

const App = (props) => {
  const onReturnToHome = () => {
    props.disconnectRoom();
    props.setCurrentRoom('');
  };
  return (
    <div>
      <Header onReturnToHome={onReturnToHome} />
      <Routes />
      <ErrorPopup error={props.error} />
    </div>
  );
};

App.propTypes = {
  setCurrentRoom: PropTypes.func.isRequired,
  disconnectRoom: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.string).isRequired,
};
const mapStateToProps = ({ error }) => ({
  error,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setCurrentRoom, disconnectRoom }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
