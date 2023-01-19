/**
 * Implementa una función sumDeep que devuelva la suma total de todos los números de un árbol cualquiera.
 */

function sumDeep(matrix) {
  console.log(`Matrix de esta iteración: ${ matrix }`);
  let sum = 0;

  for (const element of matrix) {
    if (Array.isArray(element)) {
      sum += sumDeep(element);
    } else {
      sum += element;
    }
  }

  return sum;
}

console.log(sumDeep([1, [2, 3], [[4, 5]], 1])); // 16
