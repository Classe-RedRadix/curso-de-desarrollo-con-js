/**
 * Implementa tu propia función reduce que reciba una función, un valor inicial y una lista.
 * Debe devolver el resultado de acumular los valores de la lista mediante la función acumuladora
 * y debe partir del estado inicial.
 */

function reduce(callback, initialValue, list) {
  // ?
}

console.log(reduce((acc, x) => acc + x, 0, [1, 2, 3])); // 6
console.log(reduce((acc, x) => acc + x, 10, [1, 2, 3])); // 16
