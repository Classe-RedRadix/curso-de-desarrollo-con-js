/**
 * Realiza las siguientes acumulaciones utilizando reduce
 * - Calcular la suma de todos los números de un array (excepto los negativos).
 * - Encontrar el máximo de un array de números.
 */

function sumAllPositives(list) {
  return list.filter( item => item > 0).reduce((acc, item) => acc + item, 0);
}

console.log(sumAllPositives([1, -2, 3, -4, -5, 6])); // 10


function findMax(list) {
  return list.reduce((max, item) => (max >= item)? max : item);
  // I don't specify the itinial value of "max" in here, because I do want it
  // to be the first element of the array for this exercise
}

console.log(findMax([1, -2, 13, 3, 7, -4, -5, 6, 20])); // 20

