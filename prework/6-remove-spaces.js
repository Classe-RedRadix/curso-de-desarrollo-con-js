// Function that removes all white spaces from a phrase

function getWords(phrase) {
  return phrase.replaceAll(" ", "");
}

console.log(getWords("lorem ipsum dolor"));
