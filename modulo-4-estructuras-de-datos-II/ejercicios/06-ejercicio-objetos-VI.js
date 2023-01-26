/**
 * Crea una función cloneDeep:
 * - Versión recursiva de clone
 * - Ningún subobjeto mantiene la referencia anterior
 */

const obj = { a: 1, b: { c: 2, d: 5, e: { f: 9, g: 6 } } };

function clone(obj) {
  return Object.assign({}, obj);
}

function cloneDeep(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object")
      result[key] = cloneDeep(value);
    else 
      result[key] = value;
  }

  return result;
}

console.log(cloneDeep(obj) !== obj); // true
console.log(cloneDeep(obj).b !== obj.b); // true

console.log(obj);
console.log(cloneDeep(obj));