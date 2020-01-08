import {
  ADD_HUMAN,
  IAddHuman,
  IIncreaseHumansAge,
  IKillHuman,
  INCREASE_HUMANS_AGE,
  KILL_HUMAN
} from './human_factory.types';

export const addHuman = (): IAddHuman => ({
  type: ADD_HUMAN
});

export const increaseHumansAge = (): IIncreaseHumansAge => ({
  type: INCREASE_HUMANS_AGE,
});

export const killHuman = (id: string): IKillHuman => ({
  type: KILL_HUMAN,
  id
});
