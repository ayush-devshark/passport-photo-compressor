export const covertSizeInKb = (size: number): number => {
  return parseFloat((size / 1000).toFixed(2));
};
