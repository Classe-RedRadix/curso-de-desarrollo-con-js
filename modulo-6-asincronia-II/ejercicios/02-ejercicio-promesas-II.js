/**
 * Crea una función wait que reciba un número de milisegundos y devuelva una promesa.
 * La promesa se debe resolver cuando pase el tiempo indicado.
 */

function wait(milliseconds) {
  // ?
}

wait(2000).then(() => {
  console.log("Han pasado dos segundos");
}); // A los dos segundos debería aparecer un mensaje diciendo "Han pasado dos segundos"

module.exports = wait;
