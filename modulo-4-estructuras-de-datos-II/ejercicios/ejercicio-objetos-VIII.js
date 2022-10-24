const obj1 = { a: { b: { c: 1 } } };
const obj2 = { a: { b: { d: 2 } } };

// Implementa aqui la función mergeDeep

const result = mergeDeep({}, obj1, obj2);
console.log(result); // Resultado esperado { a: { b: { c: 1, d: 2 }}}
