const a = { a: 1 };
const b = { b: 2 };
const c = { c: 3 };

Object.assign(a, b, c);

console.log(a); // { a: 1, b: 2, c: 3 }
console.log(b); // { b: 2 }
console.log(c); // { c: 3 }
