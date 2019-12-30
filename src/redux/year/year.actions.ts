import {INCREASE_YEAR, IncreaseYearType} from "./year.types";

export const increaseYear = (): IncreaseYearType => ({
  type: INCREASE_YEAR
});
