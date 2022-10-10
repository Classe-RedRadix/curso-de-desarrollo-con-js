// Crea aquí tu función flattenDeep
function flattenDeep(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  let result = [];
  array.forEach(element => {
    result = result.concat(flattenDeep(element));
  });
  return result;
}
console.log(flattenDeep([1, [2, 3], [[4, 5], [6]], [[[8]]]]));
