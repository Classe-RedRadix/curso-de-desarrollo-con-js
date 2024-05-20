// Recorre y suma todos los números de este array
let array = [
  [2, 2],
  [3, 4],
  [1, 1, 1],
];

function sumArrayOfArrays (arrayOfArrays) {
  return arrayOfArrays
    .flat()
    .reduce((sum, act) => sum + act, 0);
}

sumArrayOfArrays(array);