import * as api from '../../api';
import { SET_AUTH_USER } from '../types';

export const registerUser = (registerData) => api.registerUser(registerData);

export const loginUser = (loginData) => api.login(loginData);

export const onAuthStateChanged = (cb) => api.onAuthStateChanged(cb);

export const storeAuthUser = (authUser) => {
  return async (dispatch) => {
    if (authUser) {
      const userWithProfile = await api.getUserProfile(authUser.uid);
      dispatch({
        type: SET_AUTH_USER,
        payload: userWithProfile,
      });
    } else {
      dispatch({
        type: SET_AUTH_USER,
        payload: null,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    await api.logout();
    dispatch({
      type: SET_AUTH_USER,
      payload: null,
    });
  };
};
