/**
 * Crea una función cloneDeep:
 * - Versión recursiva de clone
 * - Ningún subobjeto mantiene la referencia anterior
 */

const obj = { a: 1, b: { c: 2, d: 5, e: { f: 9, g: 6 } } };

function cloneDeep(obj) {
  // ?
}

console.log(cloneDeep(obj) !== obj); // true
console.log(cloneDeep(obj).b !== obj.b); // true
