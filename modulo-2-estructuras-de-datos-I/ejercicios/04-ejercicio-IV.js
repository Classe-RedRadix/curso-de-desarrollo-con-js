/**
 * Implementa una función flattenDeep que reciba una lista de listas y devuelva una única lista con todos los valores.
 * Esta vez, cualquiera de las listas puede contener dentro cualquier número de listas.
 * TIP: Puede utilizar la función flatten del ejercicio-III para ayudarte.
 */

function flattenDeep(matrix) {
  // ?
}

console.log(
  flattenDeep([
    1,
    [2, 3],
    [
      [4, 5],
      [6, 7],
    ],
    [[[8]]],
  ])
); // [1, 2, 3, 4, 5, 6, 7, 8]
