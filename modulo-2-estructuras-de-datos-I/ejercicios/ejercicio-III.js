// Crea aquí tu función flatten
function flatten(array) {
  const result = [];
  array.forEach(element => {
    element.forEach(nestedArrayElement => {
      result.push(nestedArrayElement);
    });
  });
  console.log(result);
  return result;
}

flatten([
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3'],
]); // => ["A1", "A2", "A3", "B1", "B2", ...]

flatten([
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3'],
]); // => ["A1", "A2", "A3", "B1", "B2", ...]
