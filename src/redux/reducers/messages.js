import {
  FETCH_USER_MESSAGES_REQUEST,
  FETCH_USER_MESSAGES_SUCCESS,
  FETCH_USER_MESSAGES_FAIL,
} from '../types';

const initialState = {
  items: [],
  isFetching: false,
  fetchError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_MESSAGES_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_USER_MESSAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.messages,
      };
    case FETCH_USER_MESSAGES_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error,
      };
    default:
      return state;
  }
};
