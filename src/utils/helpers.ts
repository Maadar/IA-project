export const generateApproximateAge = () => {
  const dieBetween = [
    Math.floor(Math.random() * (99 - 1)) + 1,
    Math.floor(Math.random() * (99 - 1)) + 1
  ];
  return dieBetween.sort();
};
