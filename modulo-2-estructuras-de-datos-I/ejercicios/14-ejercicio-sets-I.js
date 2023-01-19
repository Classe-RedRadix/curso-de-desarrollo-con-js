/**
 * Implementa una función difference que reciba dos listas y
 * devuelva una nueva lista con los elementos de la primera que no tienen en común.
 */

function difference(listA, listB) {
  return listA.filter(item => !listB.includes(item));
}

console.log(difference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]

// The comment of what is expected as a result is WRONG
// because the elements of first list that are not in common are [1, 2]

// ...

function SymetricDifference(listA, listB) {
  return listA.filter(item => !listB.includes(item))
              .concat(listB.filter(item => !listA.includes(item)));
}

console.log(SymetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]

// Usando sets

function symetricDifferenceWithSets(listA, listB) {
  let listSet = new Set();

  listA.concat(listB).forEach(item => listSet.add(item));

  return [...listSet];
}

console.log(symetricDifferenceWithSets([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]