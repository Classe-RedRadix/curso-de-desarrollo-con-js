// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

function asynk(generator) {
  return function () {
    // Definimos la función que acepta una promesa y hace lo siguiente:
    //  - espera a que se resuelva la promesa,
    //  - mueve el generador,
    //  - si se ha llegado al final devuelve
    //  - si no se ha llegado al final se llama recursivamente a sí misma
    function resolveAndMoveGenerator(promise) {
      promise
        .then((value) => {
          const result = gen.next(value);
          if (result.done) {
            return;
          } else {
            resolveAndMoveGenerator(result.value);
          }
        })
        .catch(err => {
          throw new Error(err);
        });
    }

    // Instanciamos el generador
    const gen = generator();

    // Movemos por primera vez el generador y recuperamos el resultado
    let result = gen.next();

    // Llamamos a la función recursiva que se encarga de recorrer el generador esperando a las promesas devueltas
    resolveAndMoveGenerator(result.value);

  };
}

const main = asynk(function* () {
  const one = yield futureValue(1, 1000);
  console.log(one); // 1 -> al segundo
  const two = yield futureValue(2, 1000);
  console.log(two); // 2 -> a los dos segundos
  // Metemos un error intencionado para probar la excepción. Hay que descomentar las siguientes líneas para ver el error
  // const error = yield new Promise((_, reject) => {
  //   reject("Error intencionado.");
  // });

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
