import { combineReducers } from 'redux';
import servicesReducer from './services';
import authReducer from './auth';
import serviceByIdReducer from './serviceById';
import offersReducer from './offers';

const rootReducer = combineReducers({
  services: servicesReducer,
  auth: authReducer,
  serviceById: serviceByIdReducer,
  offers: offersReducer,
});

export default rootReducer;
