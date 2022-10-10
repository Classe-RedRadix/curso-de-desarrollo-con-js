// Implementa una función sumDeep que devuelva
// la suma total de todos los números de un árbol cualquiera.

function sumDeep(array) {
  if (!Array.isArray(array)) return array;

  let result = 0;
  array.forEach(element => {
    result += sumDeep(element);
  });

  // const totalSum = result.reduce((acc, curr) => acc + curr, 0);
  return result;
}

console.log(sumDeep([1, [2, 3], [[4, 5]]])); // 15
