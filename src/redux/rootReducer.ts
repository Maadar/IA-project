import {combineReducers} from 'redux';
import Pioneers from './pioneers/pioneers.reducer';
import Humans from "./human_factory/human_factory.reducer";

const combinedReducers = combineReducers({
  pioneers: Pioneers,
  humans: Humans
});


export default combinedReducers;
