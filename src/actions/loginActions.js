import * as types from '../constants/actionTypes';

export const googleLogin = payload => ({
  type: types.GOOGLE_LOGIN,
  payload,
});

export const getGoogleToken = payload => ({
  type: types.GOOGLE_TOKEN,
  payload,
});

export const anonymousLogin = payload => ({
  type: types.ANONYMOUS_LOGIN,
  payload,
});
