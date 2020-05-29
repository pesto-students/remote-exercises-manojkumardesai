function sumFibs(limit) {
  let fibFirstNumber = 0;
  let fibSecondNumber = 1;
  let toBeAdded = [1];
  let nextFibValue;
  for (var i = 3; i < limit - 2; i++) {
    nextFibValue = fibFirstNumber + fibSecondNumber;
    fibFirstNumber = fibSecondNumber;
    fibSecondNumber = nextFibValue;
    if (nextFibValue < limit) {
      if (nextFibValue % 2 != 0) {
        toBeAdded.push(nextFibValue);
      }
    }
  }
  let sumOfOddFibs = toBeAdded.reduce(function (a, b) {
    return a + b;
  });
  return sumOfOddFibs;
}

export {
  sumFibs,
};
