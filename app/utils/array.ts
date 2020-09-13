export const getMostRepeatedItem = <T>(array: T[], uniqueKey?: string): T | null => {
  if (array.length === 0) {
    return null;
  }

  const arrayMap = {};
  let mostRepeatedItem = array[0];
  let maxCount = 1;

  array.forEach((item: T) => {
    const itemId = uniqueKey ? item[uniqueKey] : item;

    if (arrayMap[itemId]) {
      arrayMap[itemId]++;
    } else {
      arrayMap[itemId] = 1;
    }
    if (arrayMap[itemId] > maxCount) {
      mostRepeatedItem = item;
      maxCount = arrayMap[itemId];
    }
  });

  return mostRepeatedItem;
};
