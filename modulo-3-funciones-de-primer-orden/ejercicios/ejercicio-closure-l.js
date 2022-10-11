// Crea una función que reciba un número y devuelva una función que sume ese número
// a un nuevo número que la función devuelta recibe por parámetro.

function add(num) {
  return function closuredFunction(closuredNum) {
    return num + closuredNum;
  };
}

let closureCall = add(5);
console.log(closureCall(3));
