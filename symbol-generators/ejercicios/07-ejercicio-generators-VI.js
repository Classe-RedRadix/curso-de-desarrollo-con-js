/**
 * Esta implementación contiene un par de bugs.
 * - No esta respetando el tiempo que tarda futureValue en devolver algo.
 * - Cada console.log deberia mostrar el numero que representa el orden de la variable, pero no lo está haciendo.
 */

const futureValue = (value) => new Promise((resolve) => setTimeout(() => resolve(value ?? "missing value"), 1000));

function* generator() {
  let value;

  while(true) {
    value = yield value;
  }
}

async function main() {
  const gen = generator();

  gen.next();

  const first = gen.next(await futureValue(1)).value;
  console.log(first); // 1

  const second = gen.next(await futureValue(2)).value;
  console.log(second); // 2

  const third = gen.next(await futureValue(3)).value;
  console.log(third); // 3

  const fourth = gen.next(await futureValue(4)).value;
  console.log(fourth); // 4
}

main();
