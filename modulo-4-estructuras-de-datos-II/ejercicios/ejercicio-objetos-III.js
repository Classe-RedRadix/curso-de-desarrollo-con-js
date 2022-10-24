const a = { a: 1 };
const b = { b: 2 };
const c = { c: 3 };

const obj = Object.assign({}, a, b, c);

console.log(obj); // { a: 1, b: 2, c: 3 }
