/**
 * Crea una función getPlayerScore que devuelva el resultado de tirar dos dados
 * Utiliza la función throwDice del ejercicio anterior para calcular los valores de las tiradas.
 * Devuelve el resultado utilizando un callback.
 */

const throwDice = require("./03-ejercicio-asincronia-I");

function getPlayerScore(callback) {
  const values = [];
  throwDice((number) => values[0] = number);
  throwDice((number) => values[1] = number);
  setTimeout(() => callback(values), 1000);
}

getPlayerScore((numbers) => {
  console.log(numbers); // Ejemplo: [3, 5]
});


module.exports = getPlayerScore;
