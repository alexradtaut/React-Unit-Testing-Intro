export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLettersSet = new Set(secretWord.split(''));
  const guessedLettersSet = new Set(guessedWord.split(''));
  return [...secretLettersSet].filter((letter) => guessedLettersSet.has(letter))
    .length;
}
