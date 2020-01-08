export const ADD_HUMAN = 'ADD_HUMAN';
export const INCREASE_HUMANS_AGE = 'INCREASE_HUMANS_AGE';
export const KILL_HUMAN = 'KILL_HUMAN';

export interface IAddHuman {
  type: typeof ADD_HUMAN;
}

export interface IIncreaseHumansAge {
  type: typeof INCREASE_HUMANS_AGE;
}

export interface IKillHuman {
  type: typeof KILL_HUMAN;
  id: string;
}

export type ActionTypes =
  IAddHuman |
  IIncreaseHumansAge |
  IKillHuman;
