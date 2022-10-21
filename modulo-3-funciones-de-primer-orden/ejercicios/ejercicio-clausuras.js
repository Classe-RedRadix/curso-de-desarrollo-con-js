// Crea una función que reciba un número y devuelva una función que sume ese número
// a un nuevo número que la función devuelta recibe por parámetro.
function clausuredSum(num) {
  return clausuredNum => num + clausuredNum;
}

let sum = clausuredSum(5);
console.log(sum(4));
