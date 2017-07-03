import { takeEvery, put, call } from 'redux-saga/effects';
import { getGoogleToken } from '../api/api';
import * as types from '../constants/actionTypes';

function* googleTokenSaga({ payload }) {
  try {
    const loginResults = yield call(getGoogleToken, payload);
    if (loginResults.user) {
      const { displayName, photoURL } = loginResults.user;
      yield put({ type: types.USER_SIGNED, payload: { displayName, photoURL } });
    } else {
      yield put({ type: types.USER_NOT_SIGNED });
    }
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}
export default function* getToken() {
  yield takeEvery(types.GOOGLE_TOKEN, googleTokenSaga);
}
