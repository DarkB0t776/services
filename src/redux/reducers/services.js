import { FETCH_SERVICES } from '../types';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return {
        ...state,
        items: action.services,
      };
    default:
      return state;
  }
};
