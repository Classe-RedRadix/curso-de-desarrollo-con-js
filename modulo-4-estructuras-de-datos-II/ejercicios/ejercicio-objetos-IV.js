// Crea una función clone que reciba un objeto y devuelva una copia (referencia distinta).
// Debes usar Object.assign

const obj = { a: 1, b: 2, c: 3 };

// Implementa aqui tu función clone
const clone = (object) => {
  return Object.assign({}, { ...object });
};

console.log(clone(obj) !== obj); // Aqui esperamos true
