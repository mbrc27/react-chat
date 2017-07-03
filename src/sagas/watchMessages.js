import { eventChannel, END } from 'redux-saga';
import { takeEvery, put, take, call, all, cancel, fork, cancelled } from 'redux-saga/effects';
import { getMessageListener, stopMessageListener } from '../api/api';
import * as types from '../constants/actionTypes';

let listenTask = null;

const createListener = (roomName) => {
  let emit = null;
  const channel = eventChannel((emmiter) => {
    emit = emmiter;
    getMessageListener(emmiter, roomName);
    return () => stopMessageListener(roomName);
  });
  return { channel, emit };
};

function* listen(payload) {
  const { channel, emit } = yield call(createListener, payload);
  try {
    while (true) {
      const messages = yield take(channel);
      yield put({ type: types.MESSAGES, payload: messages });
      yield put({ type: types.CURRENT_ROOM, payload });
    }
  } catch (error) {
    yield put({ type: types.ERROR, error });
  } finally {
    if (yield cancelled()) {
      emit(END);
      channel.close();
    }
  }
}

function* getMessagesSaga({ type, payload }) {
  if (type === types.CONNECT) {
    listenTask = yield fork(listen, payload);
  } else if (type === types.DISCONNECT && listenTask) {
    yield cancel(listenTask);
  }
}

export default function* watchMessages() {
  yield all([
    takeEvery(types.CONNECT, getMessagesSaga),
    takeEvery(types.DISCONNECT, getMessagesSaga),
  ]);
}
