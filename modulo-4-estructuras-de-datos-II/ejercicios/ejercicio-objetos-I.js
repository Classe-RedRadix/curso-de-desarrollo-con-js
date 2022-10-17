const obj = { a: 1, b: 2, c: 3 };

// Solución propuesta en clase
function mapKeys(object, transformer) {
  function reducer(modifiedObject, key) {
    const value = object[key];

    modifiedObject[transformer(key)] = value;

    return modifiedObject;
  }

  return Object.keys(object).reduce(reducer, {});
}

const result = mapKeys(obj, (key) => key.toUpperCase());

console.log(result); // { A: 1, B: 2, C: 3}
