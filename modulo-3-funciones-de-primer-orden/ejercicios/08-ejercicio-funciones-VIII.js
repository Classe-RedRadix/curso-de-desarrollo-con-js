/**
 * Implementa la función negate, que recibe una función que devuelve true/false e invierte su comportamiento.
 */

function negate(callback) {
  // ?
}

function isEven(number) {
  return number % 2 === 0;
}

const isOdd = negate(isEven);

[1, 2, 3, 4].filter(isNotEven); // [1, 3]
