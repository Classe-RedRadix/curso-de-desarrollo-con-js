/**
 * Implementa una función intersection que reciba dos listas y
 * devuelva una nueva lista con elementos que tienen en común.
 */

function intersection(listA, listB) {
  return listA.filter(item => listB.includes(item));
}

console.log(intersection([1, 2, 3], [3, 4, 5])); // [3]
