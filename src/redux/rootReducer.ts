import {combineReducers} from 'redux';
import Pioneers from './pioneers/pioneers.reducer';

const combinedReducers = combineReducers({
  Pioneers
});

export default combinedReducers;
