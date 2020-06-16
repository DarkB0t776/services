import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAIL,
  FETCH_USER_SERVICES_REQUEST,
  FETCH_USER_SERVICES_SUCCESS,
  FETCH_USER_SERVICES_FAIL,
} from '../types';

const initialState = {
  items: [],
  userServices: [],
  isFetching: false,
  fetchError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        items: action.services,
        isFetching: false,
      };
    case FETCH_SERVICES_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error,
      };
    case FETCH_USER_SERVICES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_SERVICES_SUCCESS:
      return {
        ...state,
        userServices: action.services,
        isFetching: false,
      };
    case FETCH_USER_SERVICES_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error,
      };
    default:
      return state;
  }
};
