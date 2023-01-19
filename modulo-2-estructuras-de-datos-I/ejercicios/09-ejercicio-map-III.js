/**
 * Realiza las siguientes transformaciones.
 */

function getMatrixResult(matrix) {
  return matrix.map(array => array.reduce((x, y) => x + y, 0));
}

console.log(getMatrixResult([[1, 2], [34, 20, 5], [11], [2, 4]])); // [3, 59, 11, 6]
