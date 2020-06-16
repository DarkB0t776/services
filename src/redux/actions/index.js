import {
  FETCH_SERVICES_SUCCESS,
  SELECT_SERVICE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAIL,
} from '../types';
import * as api from '../../api';

export const fetchServices = () => {
  return async (dispatch, getState) => {
    try {
      const existedServices = getState().services.items;
      if (existedServices.length) return;

      dispatch({ type: FETCH_SERVICES_REQUEST });
      const services = await api.fetchServices();
      return dispatch({
        type: FETCH_SERVICES_SUCCESS,
        services,
      });
    } catch (err) {
      dispatch({
        type: FETCH_SERVICES_FAIL,
        error: err,
      });
    }
  };
};

export const selectService = (id) => {
  return {
    type: SELECT_SERVICE,
    id,
  };
};

export const createService = (newService, userId) => {
  newService.price = parseInt(newService.price, 10);
  newService.user = userId;
  return api.createService(newService);
};
