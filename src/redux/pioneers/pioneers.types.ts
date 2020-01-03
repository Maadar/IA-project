import {HumanProps} from "../../types/human.types";

export const INCREMENT_PIONEERS_AGE = 'INCREMENT_PIONEERS_AGE';
export const DECREMENT_PIONEERS_AGE = 'DECREMENT_PIONEERS_AGE';
export const KILL_PIONEERS = 'KILL_PIONEERS';

export interface IncrementPioneersAgeType {
  type: typeof INCREMENT_PIONEERS_AGE;
}

export interface DecrementPioneersAgeType {
  type: typeof DECREMENT_PIONEERS_AGE;
}

export interface KillPioneersType {
  type: typeof KILL_PIONEERS;
  pioneer: string;
}

export type ActionTypes =
  IncrementPioneersAgeType |
  DecrementPioneersAgeType |
  KillPioneersType;
