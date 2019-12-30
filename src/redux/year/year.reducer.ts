import {ActionTypes, INCREASE_YEAR} from "./year.types";

const Year = (state = 0, action: ActionTypes) => {
  switch (action.type) {
    case INCREASE_YEAR:
      return ++state;

    default:
      return  state;
  }
};

export default Year;
