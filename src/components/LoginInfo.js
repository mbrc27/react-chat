import React from 'react';
import PropTypes from 'prop-types';
import UserBubble from './UserBubble';
import GoogleLoginBtn from '../components/GoogleLoginBtn';
import AnonymousLogin from '../components/AnonymousLogin';
import LoadingIndicator from '../components/LoadingIndicator';
import '../styles/LoginInfo.css';

const LoginInfo = (props) => {
  const { displayName, photoURL, fetching } = props.userInfo;
  if (fetching) return <LoadingIndicator />;
  return (
    <div className="login-info">
      {!displayName &&
        <div className="login-info__log-options">
          <GoogleLoginBtn onClick={props.googleLogin} />
          <p>Or</p>
          <AnonymousLogin onClick={props.anonymousLogin} />
        </div>}
      {displayName && <UserBubble displayName={displayName} photoURL={photoURL} />}
    </div>
  );
};

LoginInfo.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
  googleLogin: PropTypes.func.isRequired,
  anonymousLogin: PropTypes.func.isRequired,
};

export default LoginInfo;
