export const ADD_HUMAN = 'ADD_HUMAN';
export const INCREASE_AGE = 'INCREASE_AGE';

export interface IAddHuman {
  type: typeof ADD_HUMAN;
}

export interface IIncreaseYear {
  type: typeof INCREASE_AGE;
  id: string;
}

export type ActionTypes =
  IAddHuman |
  IIncreaseYear;
