import {HumanProps} from "../types/human.types";
import {CONFIG} from "../constants/config";

export const canPioneersCross = (adam: HumanProps, ewa: HumanProps): boolean => {
  if (!adam || !ewa) return false;

  const canAdamCross = (adam.age >= CONFIG.reproduction_start) && (adam.age <= CONFIG.reproduction_end);
  const canEwaCross = (ewa.age >= CONFIG.reproduction_start) && (ewa.age <= CONFIG.reproduction_end);

  return canAdamCross && canEwaCross;
};

export const tryCross = (): boolean => {
  const score = Math.floor(Math.random() * 10 + 1);
  return score >= 3 && score <= 10;
};
