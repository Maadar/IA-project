import {ActionTypes, DECREMENT_PIONEERS_AGE, INCREMENT_PIONEERS_AGE} from './pioneers.types';
import {PioneersTypes} from '../../types/human.types';
import uuid from "uuid/v4";

const initialState = {
  adam: {
    id: uuid(),
    name: 'Adam',
    surname: 'Kowalski',
    age: 20,
    isCrossable: true,
    gender: 'male',
    family: [],
    features: {
      intelligence: 8,
      luck: 4,
      strength: 8,
      health: 5,
      speed: 7,
      appearance: 4,
    },
  },
  ewa: {
    id: uuid(),
    name: 'Ewa',
    surname: 'Kowalska',
    age: 20,
    gender: 'female',
    isCrossable: true,
    family: [],
    features: {
      intelligence: 3,
      luck: 7,
      strength: 5,
      health: 8,
      speed: 4,
      appearance: 7,
    },
  }
};

const Pioneers = (state = initialState, action: ActionTypes): PioneersTypes => {
  switch (action.type) {
    case INCREMENT_PIONEERS_AGE:
      return {
        ...state,
        ewa: {
          ...state.ewa,
          age: ++state.ewa.age
        },
        adam: {
          ...state.adam,
          age: ++state.adam.age
        }
      };

    case DECREMENT_PIONEERS_AGE:
      return {
        ...state,
        ewa: {
          ...state.ewa,
          age: --state.ewa.age
        },
        adam: {
          ...state.adam,
          age: --state.adam.age
        }
      };

    default:
      return state;
  }
};

export default Pioneers;
