// Calcular la suma de todos los números de un array.
const numbersToSum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbersToSum.reduce((sum, number) => (sum = sum + number), 0);
console.log(sum); //45

// Concatenar todas las strings de un array.
const letters = ["a", "b", "c", "d"];
const concatenatedString = letters.reduce(
  (string, letter) => (string = string + letter),
  ""
);
console.log(concatenatedString);
