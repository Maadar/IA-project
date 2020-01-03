import {
  DECREMENT_PIONEERS_AGE,
  DecrementPioneersAgeType,
  INCREMENT_PIONEERS_AGE,
  IncrementPioneersAgeType,
  KILL_PIONEERS,
  KillPioneersType
} from './pioneers.types';

export const incrementPioneersAge = (): IncrementPioneersAgeType => ({
  type: INCREMENT_PIONEERS_AGE
});

export const decrementPioneersAge = (): DecrementPioneersAgeType => ({
  type: DECREMENT_PIONEERS_AGE
});

export const killPioneers = (pioneer: string): KillPioneersType => ({
  type: KILL_PIONEERS,
  pioneer
});
