import {combineReducers} from 'redux';
import Pioneers from './pioneers/pioneers.reducer';

const combinedReducers = combineReducers({
  pioneers: Pioneers
});

export default combinedReducers;
