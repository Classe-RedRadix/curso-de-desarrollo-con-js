const obj = { a: 1, b: 2, c: 3 };

// Implementa aqui la función mapValues que transforma todos los valores
// de un objeto.
/**
 * Pistas:
 * 1. ¿Que hace la función del segundo parametro?
 * 2. ¿Como podriamos utilizar esta función dentro de mapValues?
 * 3. ¿Como iteramos sobre los valores de un objeto?
 */

const mapValues = (obj, mapper) => {
  const modifiedObject = {};

  Object.keys(obj).forEach((key) => (modifiedObject[key] = mapper(obj[key])));

  return modifiedObject;
};

const valuesMapped = (obj, mapper) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = mapper(obj[key]);
    return acc;
  }, {});
};

const result = mapValues(obj, (x) => x * 2);

console.log(result); // Resultado esperado: { a: 2, b: 4, c: 6 }

const resultWithReduce = valuesMapped(obj, (x) => x * 2);
console.log(resultWithReduce);
