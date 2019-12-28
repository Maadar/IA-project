import {DECREMENT, DecrementType, INCREMENT, IncrementType} from './pioneers.types';

export const Increment = (): IncrementType => ({
  type: INCREMENT
});

export const Decrement = (): DecrementType => ({
  type: DECREMENT
});
