/**
 * Implementa un generador que devuelva el ultimo valor proporcionado al mismo.
 * - Recuerda que el primer valor proporcionado se ignora, pero puedes usar la llamada al generador para definir el valor inicial.
 */

function* generator(initialValue) {
  let value = initialValue;
  
  while (true) {
    value = yield value;
  }
}

function main() {
  const gen = generator(0);

  const zero = gen.next().value;
  console.log(zero); // 0

  const one = gen.next(1).value;
  console.log(one); // 1

  const two = gen.next(2).value;
  console.log(two); // 2
}

main();
