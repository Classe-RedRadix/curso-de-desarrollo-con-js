/**
 * Crea una función mergeDeep:
 * - Versión recursiva de Object.assign
 * - Ningún subobjeto mantiene la referencia anterior
 */
const obj1 = { a: { b: { c: 1 } } };
const obj2 = { a: { b: { d: 2 } } };

console.log(mergeDeep({}, obj1, obj2)); // Resultado esperado { a: { b: { c: 1, d: 2 }}}
