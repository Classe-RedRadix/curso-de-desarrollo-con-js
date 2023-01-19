/**
 * Implementa una función repeat que reciba una función y
 * un número N y llame a la función N veces.
 */

function repeat(callback, times) {
  for (let i = 0; i < times; i++) {
    callback();
  }
}

repeat(() => console.log("SPAM!"), 3); // SPAM! SPAM! SPAM!
