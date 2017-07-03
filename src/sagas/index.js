import { all } from 'redux-saga/effects';
import watchMessages from './watchMessages';
import postMessage from './postMessage';
import watchRooms from './watchRooms';
import loginUser from './loginUser';
import getToken from './getToken';
import createRoom from './createRoom';

export default function* startForman() {
  yield all([
    watchMessages(),
    postMessage(),
    watchRooms(),
    loginUser(),
    getToken(),
    createRoom(),
  ]);
}
