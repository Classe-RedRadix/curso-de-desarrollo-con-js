// Crea aquí tu función flatten

const flatten = (array) => {
  return array.reduce((acc, value) => acc.concat(value), []);
}

console.log(flatten([
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
])) // => ["A1", "A2", "A3", "B1", "B2", ...]