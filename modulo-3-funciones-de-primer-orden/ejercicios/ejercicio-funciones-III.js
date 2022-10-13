//Implementa tu propia función map que reciba una función y una lista.

const map = (fn, list) => {
  const result = [];
  for (const item of list) {
    result.push(fn(item));
  }
  return result;
};

const add2 = (num) => num + 2;

console.log(map(add2, [1, 2, 3])); //[3,4,5]
