// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  {
    // DESCOMENTAR PARA PROBAR EL CASO DE ERROR
    //if (value === "L") {
    //  return new Promise((resolve, reject) =>
    //    setTimeout(() => reject("Rejecting value: " + value), millisecondsWait));
    //}
    return new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));
  }

function asynk(generator) {
  return () => {
    const promiseGenerator = generator();
    function promiseConsumer(nextValue) {
      const nextPromise = promiseGenerator.next(nextValue);
      if (nextPromise.done === true) {
        return nextValue;
      }
      nextPromise.value.then((promiseValue) =>
        promiseConsumer(promiseValue)).catch((error) =>
          console.error("Asynk aborted. Reason: ", error));
    }
    promiseConsumer();
  }
}


const main = asynk(function* () {
  const one = yield futureValue(1, 1000);
  console.log("Result with asynk:", one); // 1 -> al segundo
  const two = yield futureValue(2, 1000);
  console.log("Result with asynk:", two); // 2 -> a los dos segundos

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

// Este es la funcion main a simular con el asynk.
// Los mensajes de esta funcion deben salir a la vez que los mensajes de mi funcion asynk
async function mainAsync() {
  const one = await futureValue(1, 1000);
  console.log("Result with async:", one); // 1 -> al segundo
  const two = await futureValue(2, 1000);
  console.log("Result with async:", two); // 2 -> a los dos segundos
}

mainAsync();