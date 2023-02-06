// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

function asynk(generator) {
  const gen = generator()
  return () => {
    recursiveAsynk()
    async function recursiveAsynk(value) {
      let result = gen.next(value)
      if (!result.done) {
        let promise = result.value
        recursiveAsynk(await promise)
      }
    }
  };

}



const main = asynk(function* () {
  console.time("one")
  const one = yield futureValue(1, 1000);
  console.timeEnd("one")
  console.log(one); // 1 -> al segundo

  console.time("two")
  const two = yield futureValue(2, 1000);
  console.log(two); // 2 -> a los dos segundos
  console.timeEnd("two")

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
