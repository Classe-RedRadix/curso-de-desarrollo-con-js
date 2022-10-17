const obj = { a: 1, b: 2, c: 3 };

// Implementa aqui la función mapValues que transforma todos los valores
// de un objeto.

const result = mapValues(obj, (x) => x * 2);

console.log(result); // Resultado esperado: { a: 2, b: 4, c: 6 }

/**
 * Pistas:
 * 1. ¿Que hace la función del segundo parametro?
 * 2. ¿Como podriamos utilizar esta función dentro de mapValues?
 * 3. ¿Como iteramos sobre los valores de un objeto?
 */
