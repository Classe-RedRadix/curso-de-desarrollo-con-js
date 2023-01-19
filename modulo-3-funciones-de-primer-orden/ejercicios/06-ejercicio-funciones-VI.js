/**
 * Implementa map utilizando reduce.
 * No se pueden usar bucles.
 */

function mapWithReduce(callback, list) {
  return list.reduce((acc, item) => [...acc, callback(item)], []);
}

console.log(mapWithReduce((x) => x + 1, [1, 2, 3])); // [2, 3, 4]
