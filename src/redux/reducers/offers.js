import {
  FETCH_OFFER_REQUEST,
  FETCH_SENT_OFFER_SUCCESS,
  FETCH_RECEIVED_OFFER_SUCCESS,
  FETCH_OFFER_FAIL,
} from '../types';

const initialState = {
  sent: [],
  received: [],
  isFetching: false,
  fetchError: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_OFFER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SENT_OFFER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sent: payload,
      };
    case FETCH_RECEIVED_OFFER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        received: payload,
      };
    case FETCH_OFFER_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchError: payload,
      };
    default:
      return state;
  }
};
