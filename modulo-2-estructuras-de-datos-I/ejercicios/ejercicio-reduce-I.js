// Calcular la suma de todos los números de un array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumNumbers = (numbers) => numbers.reduce((acc,number) => (acc + number),0)
console.log(sumNumbers(numbers))

// Concatenar todas las strings de un array.

const arrayCharacters = 'Hello World'.split('');

const concatArray = (array) => array.reduce((acc,character) => (acc + character),'')

console.log(concatArray(arrayCharacters))
