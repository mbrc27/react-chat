import { combineReducers } from 'redux';
import messages from './messagesReducer';
import rooms from './roomsReducer';
import userInfo from './loginReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  messages,
  rooms,
  userInfo,
  error,
});

export default rootReducer;
