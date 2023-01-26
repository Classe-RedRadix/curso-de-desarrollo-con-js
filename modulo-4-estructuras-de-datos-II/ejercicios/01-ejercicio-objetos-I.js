/**
 * Implementa la función mapKeys que transforma todas las claves de un objeto.
 */

function mapKeys(object, transformer) {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = transformer(key);
    return acc;
  });
}

console.log(mapKeys({ a: 1, b: 2, c: 3 }, (key) => key.toUpperCase())); // { A: 1, B: 2, C: 3}
