export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface IncrementType {
  type: typeof INCREMENT;
}

export interface DecrementType {
  type: typeof DECREMENT;
}

export type ActionTypes =
  IncrementType |
  DecrementType;
