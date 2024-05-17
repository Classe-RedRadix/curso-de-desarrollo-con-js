// Recorre y suma todos los números de este array

function arraySum(array) {
  const flatNumbersArray = array.flat();
  return flatNumbersArray.reduce((acc, cur) => acc + cur, 0);
}

let array = [
  [2, 2],
  [3, 4],
  [1, 1, 1],
];

arraySum(array);