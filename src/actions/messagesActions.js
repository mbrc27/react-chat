import * as types from '../constants/actionTypes';

export const getMessages = payload => ({
  type: types.CONNECT,
  payload,
});
export const disconnectRoom = payload => ({
  type: types.DISCONNECT,
  payload,
});

export const postMessage = payload => ({
  type: types.POST_MESSAGE,
  payload,
});
