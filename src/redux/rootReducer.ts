import {combineReducers} from 'redux';
import Pioneers from './pioneers/pioneers.reducer';
import Humans from "./human_factory/human_factory.reducer";
import Year from "./year/year.reducer";

const combinedReducers = combineReducers({
  pioneers: Pioneers,
  humans: Humans,
  year: Year,
});


export default combinedReducers;
