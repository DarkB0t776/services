import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../redux/reducers';

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [logger, thunk];
}

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
