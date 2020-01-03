import {HumanProps} from "../types/human.types";
import {CONFIG} from "../constants/config";

export const canPioneersCross = (adam: HumanProps, ewa: HumanProps): boolean => {
  if (!adam || !ewa) return false;

  const canAdamCross = (adam.age >= CONFIG.reproduction_start) && (adam.age <= CONFIG.reproduction_end);
  const canEwaCross = (ewa.age >= CONFIG.reproduction_start) && (ewa.age <= CONFIG.reproduction_end);

  return canAdamCross && canEwaCross;
};
