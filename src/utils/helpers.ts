export const generateApproximateAge = () => {
  return Math.floor(Math.random() * (99 - 1)) + 1;
};

export const tryKill = (): boolean => {
  const score = Math.floor(Math.random() * 10 + 1);
  return score > 9 && score <= 10;
};
