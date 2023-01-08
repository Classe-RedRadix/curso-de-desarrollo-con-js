/**
 * Crea una función getPlayerScore que devuelva el resultado de tirar dos datos
 * Utiliza la función throwDice del ejercicio anterior para calcular los valores de las tiradas.
 * Devuelve el resultado utilizando un callback.
 */

const throwDice = require("./03-ejercicio-asincronia-I");

function getPlayerScore(callback) {
  // ?
}

getPlayerScore((numbers) => {
  console.log(numbers); // Ejemplo: [3, 5]
});

module.exports = getPlayerScore;
