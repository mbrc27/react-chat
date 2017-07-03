import * as types from '../constants/actionTypes';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.MESSAGES:
      return { ...action.payload };
    default:
      return state;
  }
};
