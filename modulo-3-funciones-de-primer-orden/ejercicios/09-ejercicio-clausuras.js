/**
 * Crea una función que reciba un número y devuelva una función
 * que sume ese número a un nuevo número que la función devuelta recibe por parámetro.
 */

const makeSum = (n1) => (n2) => n1 + n2;

const sum = makeSum(5);

console.log(sum(2)); // 7
