/**
 * Crea una función recursiva que recorra el generador hasta que haya terminado.
 * - Deberiamos recibir 5 logs por consola diciendo "Continuo iterando..."
 * - Cuando termine, debemos recibir un mensaje por consola "Paro de iterar"
 */

function* generator(limit) {
  for (let index = 0; index < limit; index++) {
    yield index;
  }
}

function recursiveIteration(gen) {
  // ?
}

recursiveIteration(generator(5));
