// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

function asynk(generator) {

  return () => {
    const gen = generator();
    function iterator(yielded) {
      // console.log(yielded);
      if (yielded.done) {
        return;
      } else {
        const valor = yielded.value;
        // console.log("Iterando " + valor);
        try {
          valor.then((response) => {
            // console.log(response);
            iterator(gen.next(response));
          })

        } catch (err) {
          console.log(err);
        }
      }
    }
    // console.log("primera")
    iterator(gen.next());
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
