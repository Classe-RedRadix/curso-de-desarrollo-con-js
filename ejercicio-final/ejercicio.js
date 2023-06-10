// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

  function asynk(generator) {
    const gen = generator();
  
    function recursive_asynk(v) {
      const next = gen.next(v);
      if (next.done === true) {
        return;
      }
      next.value.then((value) => {recursive_asynk(value)}).catch(() => { throw new Error("Asynk call error") });
    }
    return recursive_asynk;
  }

const main = asynk(function* () {
  const one = yield futureValue(1, 1000);
  console.log(one); // 1 -> al segundo
  const two = yield futureValue(2, 1000);
  console.log(two); // 2 -> a los dos segundos

  const letters = ["C", "L", "A", "S", "S", "E"];

  for (let index = 0; index < letters.length; index++) {
    const wait = index * 1000 || 1000;
    const letter = yield futureValue(letters[index], wait);

    console.log("Letter #%d is %s", index, letter);
  }
});

main();
