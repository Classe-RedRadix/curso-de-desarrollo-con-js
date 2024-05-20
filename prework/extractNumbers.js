// Crea una función que extraiga los números de una string con el formato provisto
function extractNumbers(inputString) {
  return inputString
    .split(' ')
    .map(splittedString => parseInt(splittedString))
    .filter(possibleNumber => possibleNumber);
}

extractNumbers("3 20 6 1"); // [3, 20, 6, 1]