import * as types from '../constants/actionTypes';

const initialState = { current: '', all: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ROOMS: {
      const all = Object.keys(action.payload).map(key => action.payload[key]);
      return { ...state, all };
    }
    case types.CURRENT_ROOM:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};
