import { combineReducers } from 'redux';
import servicesReducer from './services';
import authReducer from './auth';

const rootReducer = combineReducers({
  services: servicesReducer,
  auth: authReducer,
});

export default rootReducer;
