// Una función que devuelve un valor al cabo de `ms` milisegundos
function futureValue(value, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), ms);
  });
}

function asynk(generator) {
  return function () {
    const gen = generator();

    function iterator(yielded) {

      return new Promise((resolve) => {
        // Si hemos llegado al final, devolvemos
        if(yielded.done) {
          return resolve();
        }

        // Wrappeamos en caso de que yielded.value no sea una promesa
        const value = !(yielded.value instanceof Promise) ?
          Promise.resolve(yielded.value) :
          yielded.value;

        // Resolvemos la promesa yieldeada con la siguiente llamada a `next`
        value.then(val => resolve(iterator(gen.next(val))));
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

  const three = yield 3;
  console.log(three); // 2 -> a los dos segundos

});

main();

/*
El ejercicio consiste en implementar la función asynk, que debe seguir estos pasos:

recibe un generador que devuelve promesas
devuelve una nueva función (recuerda que async recibe y devuelve una función)
Esa función debe seguir estos pasos:

instancia el generador
llama a next
Si el generador ha acabado devuelve
Si no, recupera la promesa yieldeada <- generator.next(value)
Espera la promesa
Si se rechaza, levanta una excepción
Si se resuelve, llama al siguiente next de forma recursiva y volvemos a empezar desde el paso 2
Recuerda que asynk espera que todos los yields devuelvan promesas. Si intentas yieldear un valor debes wrapearlo en una promesa: const wrappedValue = Promise.resolve(value)

Si quieres ir un paso más allá y poder anidar asynk asegurate de que asynk devuelva una promesa que se resuelva al finalizar la ejecución del generador.*/
