import {HumanProps} from "../../types/human.types";
import {ActionTypes, ADD_HUMAN, INCREASE_HUMANS_AGE, KILL_HUMAN} from "./human_factory.types";
import uuid from "uuid";
import {generateRandomName, getGender, getSurname} from "../../utils/names.provider";
import {generateApproximateAge} from "../../utils/helpers";

const createNewHuman = (): HumanProps => {
  const gender = getGender();

  return {
    id: uuid(),
    name: generateRandomName(gender),
    surname: getSurname(gender),
    gender: gender,
    age: 0,
    isCrossable: false,
    family: [],
    isDead: false,
    startDying: generateApproximateAge(),
    features: {
      intelligence: 0,
      luck: 0,
      speed: 0,
      strength: 0,
      health: 0,
      appearance: 0,
    }
  };
};

const Humans = (state = [], action: ActionTypes): HumanProps[] => {
  switch (action.type) {
    case ADD_HUMAN:
      return [...state, createNewHuman()];

    case INCREASE_HUMANS_AGE:
      return state.map((human: HumanProps) => {
        return {
          ...human,
          age: ++human.age
        };
      });

    case KILL_HUMAN:
      const withoutDeadHuman = state.filter((human: HumanProps) => human.id !== action.id);

      return [...withoutDeadHuman];

    default:
      return state;
  }
};

export default Humans
