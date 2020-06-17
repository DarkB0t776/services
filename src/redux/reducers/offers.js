import {
  FETCH_OFFER_REQUEST,
  FETCH_SENT_OFFER_SUCCESS,
  FETCH_RECEIVED_OFFER_SUCCESS,
  FETCH_OFFER_FAIL,
  CHANGE_OFFER_STATUS,
  COLLABORATION_CREATED_FROM_OFFER,
} from '../types';

const initialState = {
  sent: [],
  received: [],
  isFetching: false,
  fetchError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SENT_OFFER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sent: action.payload,
      };
    case FETCH_RECEIVED_OFFER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        received: action.payload,
      };
    case FETCH_OFFER_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchError: action.payload,
      };
    case CHANGE_OFFER_STATUS: {
      const modifiedReceived = [...state.received];
      const offerIdx = modifiedReceived.findIndex(
        (o) => o.id === action.payload
      );
      modifiedReceived[offerIdx].status = action.status;
      return {
        ...state,
        received: modifiedReceived,
      };
    }
    case COLLABORATION_CREATED_FROM_OFFER: {
      const modifiedOffers = [...state[action.offersType]];
      const offerIdx = modifiedOffers.findIndex((o) => o.id === action.payload);
      modifiedOffers[offerIdx].collaborationCreated = true;
      return {
        ...state,
        [action.offersType]: modifiedOffers,
      };
    }
    default:
      return state;
  }
};
