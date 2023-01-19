// Crea una función que devuelva solo los valores impares de esta lista
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function getOddNumbers(list) {
  return list.filter(x => x % 2 === 1);
}

console.log(getOddNumbers(numbers));



// ❗ Opcional: Obten solo los objetos con el valor "important" a true
const listNames = [
  { name: "lorem", important: false },
  { name: "ipsum", important: true },
];

function getImportantItems(list) {
  return list.filter(elem => elem.important);
}

console.log(getImportantItems(listNames));
