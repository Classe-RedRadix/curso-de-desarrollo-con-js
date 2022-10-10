//Dada una lista de números, conserva los números impares.
const evenNumbers = [1, 2, 3, 4, 5, 6].filter((number) => number % 2 === 0);
console.log(evenNumbers);

//Dada una lista de objetos, conserva los objetos que tengan una propiedad important: true.
const list = [
  ({ name: "lorem", important: false }, { name: "ipsum", important: true }),
];
const importantList = list.filter((item) => item.important);
console.log(importantList);
