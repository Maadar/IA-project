import {ActionTypes, DECREMENT, INCREMENT} from './pioneers.types';
import {HumanTypes} from '../../types/human.types';
import uuid from "uuid/v4";

const initialState = {
  adam: {
    id: uuid(),
    name: 'Adam',
    age: 20,
    isCrossable: true,
    family: [],
    features: {
      intelligence: 8,
      luck: 4,
      strength: 8,
      vital: 5,
      speed: 7,
    },
  },
  ewa: {
    id: uuid(),
    name: 'Ewa',
    age: 20,
    isCrossable: true,
    family: [],
    features: {
      intelligence: 3,
      luck: 7,
      strength: 5,
      vital: 8,
      speed: 4,
    },
  }
};

function Pioneers(state = initialState, action: ActionTypes): HumanTypes {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        ewa: {
          ...state.ewa,
          age: ++state.ewa.age
        }
      };

    case DECREMENT:
      return {
        ...state,
        ewa: {
          ...state.ewa,
          age: --state.ewa.age
        }
      };

    default:
      return state;
  }
}

export default Pioneers;
