import { takeEvery, put, call } from 'redux-saga/effects';
import { postMessage } from '../api/api';
import * as types from '../constants/actionTypes';

function* postMessageSaga({ payload }) {
  try {
    const message = yield call(postMessage, payload);
    yield put({ type: types.MESSAGE_SUCCESS, payload: message });
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}

export default function* watchMessages() {
  yield takeEvery(types.POST_MESSAGE, postMessageSaga);
}
