/**
 * Crea una función startGame que reciba un número N de jugadores y devuelva un array con los resultados
 * de N jugadores.
 * Utiliza la función getPlayerScore del ejercicio anterior para calcular los valores de las tiradas.
 * Devuelve el resultado utilizando un callback.
 * Puedes llamar varias funciones getPlayerScore en paralelo.
 */

const getPlayerScore = require("./04-ejercicio-asincronia-II");

console.clear(); // Para evitar ver los logs del ejercicio 04

function startGame(playersCount, callback) {
  // ?
}

startGame(2, (game) => {
  console.log(game); // Ejemplo: [[2, 2], [4, 6]]
});

startGame(3, (game) => {
  console.log(game); // Ejemplo: [[2, 2], [4, 6], [5, 1]]
});
