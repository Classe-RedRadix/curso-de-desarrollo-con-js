/**
 * Implementa una función que reciba un array e imprima el primer y último elemento.
 * - En caso de tener un solo elemento, imprime este una vez
 * - En caso de no tener elementos, no imprimas nada.
 */

function printFirstAndLast(list) {
  if (list.length === 0) return undefined;
  if (list.length === 1) return list[0];
  return list[0] + "and" + list[list.length - 1];
}

console.log(printFirstAndLast([1, 2, 3, 4, 5, 6])); // 1 and 6
console.log(printFirstAndLast([1])); // 1
console.log(printFirstAndLast([])); // undefined
