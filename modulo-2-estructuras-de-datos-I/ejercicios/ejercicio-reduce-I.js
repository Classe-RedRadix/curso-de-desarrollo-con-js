// Calcular la suma de todos los números de un array.
const list = [1, 2, 3, 4, 5, 6, 7, 8];
const reducedList = list.reduce((acc, curr) => (acc += curr), 0);
console.log(reducedList);

// Concatenar todas las strings de un array.
const stringList = ['What', ' ', 'is', ' ', 'up', ' ', 'folks'];
const reducedStringList = stringList.reduce((acc, curr) => (acc += curr), '');
console.log(reducedStringList);
