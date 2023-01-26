/**
 * Crea un objeto A cuyo prototipo sea B cuyo prototipo sea C utilizando Object.create(...)
 * Como en el ejemplo que acabamos de ver
 */

const obj1 = {'a': 1, 'b': 2};

console.log(obj1.toString); // function
console.log(obj1.toString()); // [object Object]

console.log(obj1.__proto__);

const c = { c: 1, c1: 2, c2: 2 };

const b = Object.create(c);
const a = Object.create(b);

console.log('a: ', a);
console.log('a.c1: ', a.c1);
console.log('a: ', a);
a.c1 = 5;
console.log('a.c1: ', a.c1);
console.log('a: ', a);

console.log('b: ', b);
console.log('c: ', c);