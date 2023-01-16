/**
 * Esta función genera una lista de 10 funciones, que llamando a cada una,
 * debería proporcionarnos en consola el valor de i cuando se generó.
 *
 * Pero no lo está haciendo, encuentra y arregla el bug.
 */

function createIndexLoggers() {
  let list = []; // <- Este array contendrá funciones, que ejecutan un console.log (linea 5 a la 7)
  for (let i = 0; i < 10; i++) {
    list.push(function () {
      console.log("dentro de función: ");
      console.log(i);
    });
  }

  return list;
}
const loggers = createIndexLoggers();
const firstLogger = loggers[0]; // Primera función dentro de la variable list (dentro de la función)
const secondLogger = loggers[1]; // Segunda función

console.log("fuera: ");
console.log(firstLogger()); // ?

console.log("fuera: ");
console.log(secondLogger()); // ?

console.log(Math.max);