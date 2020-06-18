import { combineReducers } from 'redux';
import servicesReducer from './services';
import authReducer from './auth';
import serviceByIdReducer from './serviceById';
import offersReducer from './offers';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  services: servicesReducer,
  auth: authReducer,
  serviceById: serviceByIdReducer,
  offers: offersReducer,
  userMessages: messagesReducer,
});

export default rootReducer;
