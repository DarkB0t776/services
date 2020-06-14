import { combineReducers } from 'redux';
import servicesReducer from './services';

const rootReducer = combineReducers({
  services: servicesReducer,
});

export default rootReducer;
