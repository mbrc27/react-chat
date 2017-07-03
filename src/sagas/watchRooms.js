import { eventChannel } from 'redux-saga';
import { takeEvery, put, take, call } from 'redux-saga/effects';
import { getRoomsListener, stopRoomsListener } from '../api/api';
import * as types from '../constants/actionTypes';

const createListener = () => {
  const channel = eventChannel((emmiter) => {
    getRoomsListener(emmiter);
    return () => stopRoomsListener();
  });
  return channel;
};

function* watchRooms({ payload }) {
  try {
    const roomsChannel = yield call(createListener, payload);
    while (true) {
      const rooms = yield take(roomsChannel);
      yield put({ type: types.ROOMS, payload: rooms });
    }
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export default function* getRooms() {
  yield takeEvery(types.FETCH_ROOMS, watchRooms);
}
