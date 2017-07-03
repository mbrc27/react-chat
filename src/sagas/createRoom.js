import { takeEvery, put, call } from 'redux-saga/effects';
import { createChatRoom } from '../api/api';
import * as types from '../constants/actionTypes';

function* createRoomSaga({ payload }) {
  try {
    yield call(createChatRoom, payload);
    yield put({ type: types.CONNECT, payload });
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}
export default function* createRoom() {
  yield takeEvery(types.CREATE_ROOM, createRoomSaga);
}
