/**
 * Implementa la función partial para un sólo parámetro.
 */

function makeReducer(callback, initialValue) {
  // ?
}

let reducer = makeReducer((acc, x) => acc + x, 0);

console.log(reduce((acc, x) => acc + x, 0, [1, 2, 3])); // 6

reducer = makeReducer((acc, x) => acc + x, 10);

console.log(reduce((acc, x) => acc + x, 10, [1, 2, 3])); // 16
