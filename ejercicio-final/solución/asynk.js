// Una función que devuelve un valor al cabo de `ms` milisegundos
function futureValue(value, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), ms);
  });
}

function asynk(generator) {
  return function (...args) {
    const gen = generator(...args);

    function iterator(yielded) {
      return new Promise((resolve) => {
        // Si hemos llegado al final, devolvemos
        if (yielded.done) return resolve();

        // Wrappeamos en caso de que yielded.value no sea una promesa
        const value = Promise.resolve(yielded.value);

        // Resolvemos la promesa yieldeada con la siguiente llamada a `next`
        value.then((res) => {
          resolve(iterator(gen.next(res)));
        });
      });
    }

    return iterator(gen.next());
  };
}

// Test asynk
const main = asynk(function* () {
  const one = yield futureValue(1, 1000);
  console.log(one);
  const two = yield futureValue(2, 1000);
  console.log(two);
});

main();

// Test asynk anidado
// const nestedMain = asynk(function* () {
//   console.log("---");
//   yield asynk(function* () {
//     const one = yield futureValue(1, 1000);
//     console.log(one);
//     const two = yield futureValue(2, 1000);
//     console.log(two);
//   })();
//   console.log("---");
// });

// nestedMain();
