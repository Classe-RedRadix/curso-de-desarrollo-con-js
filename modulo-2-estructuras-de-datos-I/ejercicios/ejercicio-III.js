// Crea aquí tu función flatten
const flatten = (matrix) => {
  const flatArray = [];

  matrix.forEach((array) => {
    array.forEach((item) => flatArray.push(item));
  });

  return flatArray;
};

//["A1", "A2", "A3", "B1", "B2", ...]
console.log(
  "flatten",
  flatten([
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
  ])
);

const flatten2 = (matrix) =>
  matrix.reduce((acc, current) => [...acc, ...current], []);

//["A1", "A2", "A3", "B1", "B2", ...]
console.log(
  "flatten2",
  flatten2([
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
  ])
);
