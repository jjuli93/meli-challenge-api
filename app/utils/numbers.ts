export const getDecimalPart = (number: number, numberOfDecimals: number) =>
  parseInt(
    number
      .toFixed(numberOfDecimals)
      .toString()
      .split('.')[1]
  );
