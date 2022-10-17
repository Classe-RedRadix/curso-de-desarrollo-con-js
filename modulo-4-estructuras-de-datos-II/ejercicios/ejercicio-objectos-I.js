const obj = { a: 1, b: 2, c: 3 };

function mapKeys(obj, key) {
  const result = {};
  Object.entries(obj).forEach(
    element => (result[element[0].toUpperCase()] = element[1])
  );
  return result;
}
console.log(mapKeys(obj)); // {A: 1, B: 2, C: 3}
