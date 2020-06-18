import {
  FETCH_USER_MESSAGES_REQUEST,
  FETCH_USER_MESSAGES_SUCCESS,
  FETCH_USER_MESSAGES_FAIL,
  MARK_MESSAGE_AS_READ,
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
    case MARK_MESSAGE_AS_READ:
      const newMessages = [...state.items];
      const msgIdx = newMessages.findIndex((m) => m.id === action.id);
      newMessages[msgIdx].isRead = true;

      return {
        ...state,
        items: newMessages,
      };
    default:
      return state;
  }
};
