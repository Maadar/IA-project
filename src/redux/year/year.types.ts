export const INCREASE_YEAR = 'INCREASE_YEAR';

export interface IncreaseYearType {
  type: typeof INCREASE_YEAR
}

export interface IYear {
  year: number;
}

export type ActionTypes =
  IncreaseYearType;
