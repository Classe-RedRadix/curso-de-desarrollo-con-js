/**
 * Crea una función sumObject que reciba un objeto como este y sume todos los números.
 * El resultado debería ser 23.
 */

const obj = { a: 1, b: { c: 2, d: 5, e: { f: 9, g: 6 } } };

function sumObject(obj) {
  return Object.values(obj).reduce((total, item, key) => {
    if (typeof item === 'object') {
      total += sumObject(item);
      return total;
    }
    total += item;
    return total;
  }
  , 0);
}

console.log(sumObject({ a: 1, b: { c: 2, d: 5, e: { f: 9, g: 6 } } })); // 23
