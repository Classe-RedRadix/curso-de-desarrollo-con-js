/**
 * Crea una función throwDice que devuelva el resultado de tirar un dado
 * de 6 caras al cabo de 1000ms a través de una promesa.
 */

const wait = require("./02-ejercicio-promesas-II");

function throwDice() {
  return new Promise((resolve) => {
    const value = Math.min(Math.floor(Math.random() * 6));
    wait(1000).then(() => {
      resolve(value);
    });
  });
}
/*
throwDice().then((result) => console.log(result)); // 2
*/
module.exports = throwDice;
