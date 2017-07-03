import * as types from '../constants/actionTypes';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ERROR:
      return { message: action.error.message };
    default:
      return state;
  }
};
