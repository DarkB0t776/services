import { FETCH_SERVICES_SUCCESS, SELECT_SERVICE } from '../types';

const initialState = {
  items: [],
  selectedService: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        items: action.services,
      };
    case SELECT_SERVICE:
      const selectedService = state.items.find((item) => item.id === action.id);
      return {
        ...state,
        selectedService,
      };
    default:
      return state;
  }
};
