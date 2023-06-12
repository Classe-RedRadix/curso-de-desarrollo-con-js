// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

function asynk(generator) {
  //Llamamos al generador y con el return devolvemos una funcionn para llamar al main();
  return () => {
    const iter = generator();
    //Definimos la variable de output
    let futureResult;
    // Describimos la funcion de iteración para poderla hacer de forma recursiva
    (function iteration(value) {
      // iteramos sobre el generador
      futureResult = iter.next(value);
      //Si estoy en el ultimo yield
      if (futureResult.done) {
        futureResult.value;
      } else {
        // Aqui hacemos el .then y el .catch dependiendo si no podemos o podemos resolver la promisa
        futureResult.value
          .then(iteration)
          .catch(err => {
            err
          });
      }
    })();
  }
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
  // Esto es para probar si el catch funciona
  yield Promise.reject(console.log("Error: promise no solved"));
});

main();
