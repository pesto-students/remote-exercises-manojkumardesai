
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
  const maxDuplicatedLetterCount = Math.max(...Object.values(letterCountMap));
  return maxDuplicatedLetterCount > 1 ? maxDuplicatedLetterCount : false;
}

export {
  duplicateLetters,
};
