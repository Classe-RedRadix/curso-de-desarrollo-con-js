const array = [1, 2, 3];

// Añade una propiedad average a un array que devuelva la media de los valores del array.
/**
 * Pistas:
 * 1. Puedes usar Object.defineProperty sobre un array.
 */

const getAverage = (arr) => {
  const sum = arr.reduce((acc, num) => (acc = acc + num), 0);
  return sum / arr.length;
};

Object.defineProperty(array, "average", {
  value: getAverage(array),
});

console.log(array.average); // Deberiamos obtener 2
