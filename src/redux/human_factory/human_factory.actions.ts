import {ADD_HUMAN, IAddHuman, IIncreaseYear, INCREASE_AGE} from './human_factory.types';

export const addHuman = (): IAddHuman => ({
  type: ADD_HUMAN
});

export const increaseAge = (id: string): IIncreaseYear => ({
  type: INCREASE_AGE,
  id
});
