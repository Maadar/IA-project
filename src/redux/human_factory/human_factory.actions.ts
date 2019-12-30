import {ADD_HUMAN, IAddHuman, IIncreaseHumansAge, INCREASE_HUMANS_AGE} from './human_factory.types';

export const addHuman = (): IAddHuman => ({
  type: ADD_HUMAN
});

export const increaseHumansAge = (): IIncreaseHumansAge => ({
  type: INCREASE_HUMANS_AGE,
});
