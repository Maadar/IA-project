export const ADD_HUMAN = 'ADD_HUMAN';
export const INCREASE_HUMANS_AGE = 'INCREASE_HUMANS_AGE';

export interface IAddHuman {
  type: typeof ADD_HUMAN;
}

export interface IIncreaseHumansAge {
  type: typeof INCREASE_HUMANS_AGE;
}

export type ActionTypes =
  IAddHuman |
  IIncreaseHumansAge;
