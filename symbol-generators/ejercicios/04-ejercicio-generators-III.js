/**
 * Crea un generador que genere numeros impares.
 * IMPORTANTE: Debe terminar antes de llegar a 50.
 */

function* generator() {
  const maxIterator = 50;
  let accumulator = 1;

  while (accumulator < maxIterator) {
    yield accumulator;
    accumulator += 2;
  }
}

const gen = generator();

for (const number of gen) {
  console.log(number); // 1, 3, 5, 7, 9, ... etc
}
