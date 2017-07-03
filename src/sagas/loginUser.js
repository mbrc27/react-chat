import { takeEvery, put, call } from 'redux-saga/effects';
import { googleLogin } from '../api/api';
import * as types from '../constants/actionTypes';

function* googleLoginSaga({ payload }) {
  try {
    yield call(googleLogin, payload);
  } catch (error) {
    yield put({ type: types.ERROR, error });
  }
}
export default function* loginUser() {
  yield takeEvery(types.GOOGLE_LOGIN, googleLoginSaga);
}
