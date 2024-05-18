// Crea una función que extraiga los números de una string con el formato provisto
function extractNumbers(text) {
  return text
    .split(' ')
    .map(number => Number(number))
}

extractNumbers("3 20 6 1"); // [3, 20, 6, 1]