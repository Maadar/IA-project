export const ADD_HUMAN = 'ADD_HUMAN';
export const INCREASE_AGE = 'INCREASE_AGE';

export const addHuman = () => ({
  type: ADD_HUMAN
});

export const increaseYear = (id) => ({
  type: INCREASE_AGE,
  id
});
