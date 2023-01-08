/**
 * Crea una función startGame que devuelva los resultados de las tiradas de 3 jugadores
 * No utilices bucles.
 * Utiliza la función getPlayerScore del ejercicio anterior para calcular los valores de las tiradas.
 * Devuelve el resultado utilizando un callback.
 */

const getPlayerScore = require("./04-ejercicio-asincronia-II");

console.clear(); // Para evitar ver los logs del ejercicio 04

function startGame(callback) {
  // ?
}

startGame((game) => {
  console.log(game); // Ejemplo: [[2, 2], [4, 6], [5, 1]]
});
