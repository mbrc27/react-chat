import * as types from '../constants/actionTypes';

export const getRooms = payload => ({
  type: types.FETCH_ROOMS,
  payload,
});

export const setCurrentRoom = payload => ({
  type: types.CURRENT_ROOM,
  payload,
});

export const createRoom = payload => ({
  type: types.CREATE_ROOM,
  payload,
});
