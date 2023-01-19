/**
 * Implementa tu propia función map.
 */

function map(callback, list) {
  let transformedList = [];

  for (let i = 0; i < list.length; i++) {
    transformedList[i] = callback(list[i]);
  }

  return transformedList;
}

console.log(map((x) => x + 1, [1, 2, 3])); // [2, 3, 4]
