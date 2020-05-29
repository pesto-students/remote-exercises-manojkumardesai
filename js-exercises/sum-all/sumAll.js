function sumAll(numbersToFindSum) {
  const smallerNumber = Math.min(...numbersToFindSum);
  const biggerNumber = Math.max(...numbersToFindSum);
  // Gauss - sum of consequtive numbers formula
  return ((biggerNumber - smallerNumber + 1)(smallerNumber * biggerNumber) / 2);
}

export {
  sumAll,
};
