/**
 * Implementa una función flatten que reciba una lista de listas de strings y
 * devuelva una única lista con todos los valores.
 */

function flatten(matrix) {
  let flatMatrix = [];

  matrix.forEach((subArray) => subArray.forEach((elem) => flatMatrix.push(elem)));

  return flatMatrix;
}

console.log(
  flatten([
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
  ])
); // ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
