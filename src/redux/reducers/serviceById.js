import {
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAIL,
} from '../types';

const initialState = {
  item: {},
  isFetching: false,
  fetchError: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SERVICE_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_SERVICE_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        item: payload,
      };
    }
    case FETCH_SERVICE_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchError: payload,
      };
    default:
      return state;
  }
};
