
function duplicateLetters(userInputWord) {
  const letterCountMap = {};
  const splitUserInputToLeters = userInputWord.split('');
  splitUserInputToLeters.forEach((letter) => {
    if (letterCountMap[letter]) {
      letterCountMap[letter]++;
    } else {
      letterCountMap[letter] = 1;
    }
  });
  return Math.max(...Object.values(letterCountMap));
}

export {
  duplicateLetters,
};
