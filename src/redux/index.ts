import {compose, createStore} from 'redux';
import combinedReducers from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combinedReducers,
  composeEnhancers()
);
