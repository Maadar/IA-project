import {ActionTypes, INCREMENT_ADAM_AGE, INCREMENT_EWA_AGE, KILL_ADAM, KILL_EWA} from './pioneers.types';
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
    startDying: 35,
    isDead: false,
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
    startDying: 40,
    isDead: false,
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
    case INCREMENT_ADAM_AGE:
      return {
        ...state,
        adam: {
          ...state.adam,
          age: ++state.adam.age
        }
      };

    case INCREMENT_EWA_AGE:
      return {
        ...state,
        ewa: {
          ...state.ewa,
          age: ++state.ewa.age
        },
      };

    case KILL_ADAM:
      return {
        ...state,
        adam: {
          ...state.adam,
          isDead: true
        }
      };

    case KILL_EWA:
      return {
        ...state,
        ewa: {
          ...state.ewa,
          isDead: true
        }
      };

    default:
      return state;
  }
};

export default Pioneers;
