/**
 * Implementa la función partial para un sólo parámetro.
 */

function makeReducer(callback, list) {
  // ?
}

let reducer = makeReducer((acc, x) => acc + x, 0);

console.log(reducer((acc, x) => acc + x, 0, [1, 2, 3])); // 6



reducer = makeReducer((acc, x) => acc + x, 10);

console.log(reducer((acc, x) => acc + x, 10, [1, 2, 3])); // 16
