import {
  FETCH_SERVICES_SUCCESS,
  SELECT_SERVICE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAIL,
  FETCH_USER_SERVICES_REQUEST,
  FETCH_USER_SERVICES_SUCCESS,
  FETCH_USER_SERVICES_FAIL,
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAIL,
} from '../types';
import * as api from '../../api';

export const fetchServices = () => {
  return async (dispatch, getState) => {
    try {
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

export const fetchUserServices = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_USER_SERVICES_REQUEST });
      const services = await api.fetchUserServices(userId);
      return dispatch({
        type: FETCH_USER_SERVICES_SUCCESS,
        services,
      });
    } catch (err) {
      dispatch({
        type: FETCH_USER_SERVICES_FAIL,
        error: err,
      });
    }
  };
};

export const fetchServiceById = (serviceId) => {
  return async (dispatch, getState) => {
    try {
      console.log('Fetch By ID');
      const lastService = getState().serviceById.item;
      if (lastService.id && lastService.id === serviceId)
        return Promise.resolve();

      dispatch({ type: FETCH_SERVICE_REQUEST });
      const service = await api.fetchServiceById(serviceId);
      const user = await service.user.get();
      service.user = user.data();
      service.user.id = user.id;
      dispatch({
        type: FETCH_SERVICE_SUCCESS,
        payload: service,
      });
    } catch (err) {
      dispatch({
        type: FETCH_SERVICE_FAIL,
        payload: err.message,
      });
    }
  };
};

// export const selectService = (id) => {
//   return {
//     type: SELECT_SERVICE,
//     id,
//   };
// };

export const createService = (newService, userId) => {
  newService.price = parseInt(newService.price, 10);
  newService.user = api.createRef('users', userId);
  return api.createService(newService);
};
