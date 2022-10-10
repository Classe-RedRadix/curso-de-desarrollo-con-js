// Calcular la suma de todos los números de un array.
const sumDeep = (parameter) => {
  if (!Array.isArray(parameter)) {
    return parameter;
  } else {
    let result = 0;
    for (let item of parameter) {
      result = result + sumDeep(item);
    }
    return result;
  }
};

//29
console.log(sumDeep([1, [2, 3], [[4, 5], 6], [[[8]]]]));
// Concatenar todas las strings de un array.
