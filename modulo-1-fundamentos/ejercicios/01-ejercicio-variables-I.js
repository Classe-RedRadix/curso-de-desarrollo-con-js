/**
 * Esta función genera un número random en base a un valor que proporcionamos
 * y cierto compartimiento interno, pero al ejecutarla, recibimos un error.
 *
 * Encuentra y arregla el bug.
 */

function randomNumber(modifier) {
  if (Math.random() > 0.5) {
    let base = 1;
  } else {
    let base = -1;
  }

  return base * modifier * Math.random();
}

randomNumber(); // Error!
