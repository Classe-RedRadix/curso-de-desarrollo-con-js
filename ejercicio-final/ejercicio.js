// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

function asynk(generator) {
  const iterator = generator();

  const handle = (result) => {
    if (result.done) return;

    const value = result.value;
    if (value instanceof Promise) {
      value.then((resolved) => handle(iterator.next(resolved)));
    } else {
      handle(iterator.next(value));
    }
  };

  return () => handle(iterator.next());
}

const main = asynk(function* () {
  const one = yield futureValue(1, 1000);
  console.log(one); // 1 -> al segundo
  const two = yield futureValue(2, 1000);
  console.log(two); // 2 -> a los dos segundos

  /**
   * 👇🏻 (Opcional) Descomentar cuando funcione el anterior,
   * deberia funcionar sin hacer cambios en nuestra función "asynk".
   */
  const letters = ["C", "L", "A", "S", "S", "E"];

  for (let index = 0; index < letters.length; index++) {
    const wait = index * 1000 || 1000;
    const letter = yield futureValue(letters[index], wait);

    console.log("Letter #%d is %s", index, letter);
  }
});

main();
