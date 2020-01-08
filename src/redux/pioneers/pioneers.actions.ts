import {
  INCREMENT_ADAM_AGE,
  INCREMENT_EWA_AGE,
  KILL_ADAM,
  KILL_EWA,
  KillAdamType,
  KillEwamType,
  IncrementAdamAgeType,
  IncrementEwaAgeType,
} from './pioneers.types';

export const incrementAdamAge = (): IncrementAdamAgeType => ({
  type: INCREMENT_ADAM_AGE
});

export const incrementEwaAge = (): IncrementEwaAgeType => ({
  type: INCREMENT_EWA_AGE
});

export const killAdam = (): KillAdamType => ({
  type: KILL_ADAM
});

export const killEwa = (): KillEwamType => ({
  type: KILL_EWA
});
