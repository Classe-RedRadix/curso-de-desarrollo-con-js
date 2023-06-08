// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

// function asynk(generator) {
//   return () => {
//     const gen = generator();

//     const firstIter = gen.next();
//     console.log(firstIter);
//     if (!firstIter.done)
//     {
//     const firstPromise = firstIter.value;
//     firstPromise
//       .then((val) => {
//         console.log(val);
//         const secondIter = gen.next(val);
//         console.log(secondIter);
//         return secondIter.value;
//       })
//       .then((val) => {
//         console.log(val);
//         gen.next(val);
//       });
//     }
//   };

function asynk(generator) {
  return () => {
    const gen = generator();

    function iterator(yielded) {
      if (yielded.done) {
        return;
      } else {
        yielded.value.then((val) => {
          iter = gen.next(val);
          return iterator(iter);
        });
      }
    }

    const firstIter = gen.next();
    return iterator(firstIter);
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
