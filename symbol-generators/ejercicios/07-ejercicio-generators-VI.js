/**
 * Esta implementación contiene un par de bugs.
 * - No esta respetando el tiempo que tarda futureValue en devolver algo.
 * - Cada console.log deberia mostrar el numero que representa el orden de la variable, pero no lo está haciendo.
 */

const futureValue = (value) => new Promise((resolve) => setTimeout(() => resolve(value || "missing value"), 1000));

function* generator() {
  // ?
}

function main() {
  const gen = generator();

  gen.next();

  const first = gen.next(futureValue()).value;
  console.log(first); // 1

  const second = gen.next(futureValue()).value;
  console.log(second); // 2

  const third = gen.next(futureValue()).value;
  console.log(third); // 3

  const fourth = gen.next(futureValue()).value;
  console.log(fourth); // 4
}

main();
