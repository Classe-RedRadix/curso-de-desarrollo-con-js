/**
 * Crea una función getPlayerScore que devuelva el resultado de tirar dos dados
 * Utiliza la función throwDice del ejercicio anterior para calcular los valores de las tiradas.
 * Devuelve el resultado a través de una promesa.
 */

const throwDice = require("./03-ejercicio-promesas-III");

function getPlayerScore() {
  return new Promise((resolve, reject) => {
    throwDice()
      .then((result1) => throwDice()
                          .then((result2) => resolve([result1, result2]))
                          .catch(e => console.error(e)))
      .catch(e => console.error(e));
  });
}
/*
getPlayerScore().then((result) => console.log(result)); // Ejemplo: [3, 5]
*/
module.exports = getPlayerScore;
