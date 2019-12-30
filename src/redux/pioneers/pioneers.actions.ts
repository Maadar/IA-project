import {INCREMENT_PIONEERS_AGE, DECREMENT_PIONEERS_AGE, DecrementPioneersAgeType, IncrementPioneersAgeType} from './pioneers.types';

export const incrementPioneersAge = (): IncrementPioneersAgeType => ({
  type: INCREMENT_PIONEERS_AGE
});

export const decrementPioneersAge = (): DecrementPioneersAgeType => ({
  type: DECREMENT_PIONEERS_AGE
});
