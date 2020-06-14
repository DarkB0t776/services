import { FETCH_SERVICES_SUCCESS, SELECT_SERVICE } from '../types';
import db from '../../db';

export const fetchServices = () => {
  return async (dispatch) => {
    try {
      const collectionRef = await db.collection('services').get();
      const transformedData = collectionRef.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      return dispatch({
        type: FETCH_SERVICES_SUCCESS,
        services: transformedData,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const selectService = (id) => {
  return {
    type: SELECT_SERVICE,
    id,
  };
};
