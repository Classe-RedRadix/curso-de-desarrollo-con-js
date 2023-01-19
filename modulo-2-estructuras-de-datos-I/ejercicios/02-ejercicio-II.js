/**
 * Implementa una función cut que reciba una lista, y dos índices.
 * La función debe devolver una nueva lista con los valores comprendidos entre los dos índices.
 * Incluye los extremos.
 * - Si la función no recibe un segundo índice, incluye el resto de valores.
 * - No utilices la función nativa slice.
 */

function cut(list, start, end) {
  if (end === undefined) end = list.length;
  let array = [];
  for (let i = 0; i < list.length; i++) {
    if (i >= start && i<= end) {
      array.push(list[i]);
    }
  }
  return array;
}

console.log(cut(["a", "b", "c", "d"], 1, 2)); // ["b", "c"]
console.log(cut(["a", "b", "c", "d"], 1)); // ["b", "c", "d"]
