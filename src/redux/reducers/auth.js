import { SET_AUTH_USER } from '../types';

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoggedResolved: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user: payload,
        isLoggedResolved: true,
        isLoggedIn: !!payload,
      };
    default:
      return state;
  }
};
