/**
 * Realiza las siguientes acumulaciones utilizando reduce
 * - Sumar todos los numeros de un array
 * - Concatenar todos los strings de una lista (no puedes usar .join)
 */

function sumAll(list) {
  return list.reduce((total, item) => total + item, 0);
}

console.log(sumAll([1, 2, 3, 4, 5, 6])); // 21



function joinAllString(list) {
  return 0;
}

console.log(joinAllString(["hello", "world", "lorem ipsum"])); // "helloworldlorem ipsum"
