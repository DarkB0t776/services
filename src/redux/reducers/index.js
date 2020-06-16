import { combineReducers } from 'redux';
import servicesReducer from './services';
import authReducer from './auth';
import serviceByIdReduce from './serviceById';

const rootReducer = combineReducers({
  services: servicesReducer,
  auth: authReducer,
  serviceById: serviceByIdReduce,
});

export default rootReducer;
