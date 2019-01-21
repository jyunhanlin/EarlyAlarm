import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import auth from './reducer/authReducer'

// isProd
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = combineReducers({ auth });

export default createStore(
  store,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
