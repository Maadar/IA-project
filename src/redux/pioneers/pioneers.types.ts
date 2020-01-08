export const INCREMENT_EWA_AGE = 'INCREMENT_EWA_AGE';
export const INCREMENT_ADAM_AGE = 'INCREMENT_ADAM_AGE';
export const KILL_EWA = 'KILL_EWA';
export const KILL_ADAM = 'KILL_ADAM';

export interface IncrementAdamAgeType {
  type: typeof INCREMENT_ADAM_AGE;
}

export interface IncrementEwaAgeType {
  type: typeof INCREMENT_EWA_AGE;
}

export interface KillAdamType {
  type: typeof KILL_ADAM;
}

export interface KillEwamType {
  type: typeof KILL_EWA;
}

export type ActionTypes =
  IncrementEwaAgeType |
  IncrementAdamAgeType |
  KillAdamType |
  KillEwamType;
