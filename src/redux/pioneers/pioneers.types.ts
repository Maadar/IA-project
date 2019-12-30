export const INCREMENT_PIONEERS_AGE = 'INCREMENT_PIONEERS_AGE';
export const DECREMENT_PIONEERS_AGE = 'DECREMENT_PIONEERS_AGE';

export interface IncrementPioneersAgeType {
  type: typeof INCREMENT_PIONEERS_AGE;
}

export interface DecrementPioneersAgeType {
  type: typeof DECREMENT_PIONEERS_AGE;
}

export type ActionTypes =
  IncrementPioneersAgeType |
  DecrementPioneersAgeType;
