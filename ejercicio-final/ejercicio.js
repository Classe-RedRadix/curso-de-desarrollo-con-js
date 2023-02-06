
const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));
  

function asynk(generator) {
  return function (...args) {
    const gen = generator(...args);
  
    function iterator(yielded) {
      return new Promise(async (resolve) => {

        // Si hemos llegado al final, devolvemos
        if (yielded.done) return(yielded.value);

        // Wrappeamos en caso de que yielded.value no sea una promesa
        const promise = Promise.resolve(yielded.value);

        // Resolvemos la promesa yieldeada con la siguiente llamada a `next`
        resolve(iterator(gen.next(await promise)));
      });
    }

    return iterator(gen.next());
  
  };
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
