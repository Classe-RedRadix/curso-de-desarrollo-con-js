// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

// Implementacion no recursiva, que es la primera que me ha salido y creo que se entiende mÃ¡s fÃ¡cil
//
// function asynk(generator) {
//   const gen = generator();
//   let result = gen.next();
//
//   return async () => {
//     while (!result.done) {
//       let promise = result.value;
//       let value = await promise;
//       result = gen.next(value)
//     }
//   }
// }

// Implementacion recursiva como pide README.md
function asynk(generator) {
  const gen = generator();

  return () => {
    async function recursiveFunction(value) {
      const result = gen.next(value)
      if (result.done) return

      const promise = result.value
      value = await promise

      recursiveFunction(value)
    }

    recursiveFunction(undefined)
  }
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
