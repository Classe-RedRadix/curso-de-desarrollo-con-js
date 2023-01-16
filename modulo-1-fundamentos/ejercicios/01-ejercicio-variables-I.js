/**
 * Esta función genera un número random en base a un valor que proporcionamos
 * y cierto compartimiento interno, pero al ejecutarla, recibimos un error.
 *
 * Encuentra y arregla el bug.
 */

function randomNumber(modifier) {
  let base;
  if (Math.random() > 0.5) {
     base = 1;
  } else {
     base = -1;
  }

  return base * modifier * Math.random();
}

console.log(randomNumber(1)); // Error!
