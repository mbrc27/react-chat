import * as types from '../constants/actionTypes';

const initialState = { displayName: '', photoUrl: '', fetching: false };
export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_SIGNED:
      return { ...action.payload, fetching: false };
    case types.USER_NOT_SIGNED:
      return { ...state, fetching: false };
    case types.GOOGLE_TOKEN:
      return { ...state, fetching: true };
    case types.ANONYMOUS_LOGIN:
      return { ...action.payload, photoURL: '/placeholder-user.png', fetching: false };
    default:
      return state;
  }
};
