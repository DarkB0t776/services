import { FETCH_SERVICES_SUCCESS, SELECT_SERVICE } from '../types';
import * as api from '../../api';

export const fetchServices = () => {
  return async (dispatch) => {
    const services = await api.fetchServices();
    return dispatch({
      type: FETCH_SERVICES_SUCCESS,
      services,
    });
  };
};

export const selectService = (id) => {
  return {
    type: SELECT_SERVICE,
    id,
  };
};
