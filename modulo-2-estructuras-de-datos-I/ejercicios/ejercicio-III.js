// const flatten = bidimensionalArray => {
//   return bidimensionalArray.flat()
// }

const flatten = bidimensionalArray => {
  return bidimensionalArray.reduce(
    (flattenArray, subArray) => flattenArray.concat(subArray),
    [],
  );
};

console.log(
  flatten([
    ['A1', 'A2', 'A3'],
    ['B1', 'B2', 'B3'],
    ['C1', 'C2', 'C3'],
  ]),
); // => ["A1", "A2", "A3", "B1", "B2", ...]
