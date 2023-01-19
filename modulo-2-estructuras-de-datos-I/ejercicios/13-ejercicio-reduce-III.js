/**
 * Realiza la siguiente transformación utilizando reduce
 */

function sumMatrix(matrix) {
  return matrix.map( array => array.reduce((total, item) => total + item, 0));
}

console.log(sumMatrix([[1, 2], [34, 20, 5], [11], [2, 4]])); // [3, 59, 11, 6]
