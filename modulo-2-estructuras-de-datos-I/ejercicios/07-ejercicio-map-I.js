/**
 * Realiza las siguientes transformaciones.
 */

function divideByTwo(list) {
  return list.map(x => x / 2);
}

console.log(divideByTwo([8, 12, 20])); // [4, 6, 10]





function castToString(list) {
  return list.map(x => String(x));
}

console.log(castToString([1, 7, 50])); // ["1", "7", "50"]





function getNumberSign(list) {
  return list.map(x => (x < 0)? "-" : "+");
}

console.log(getNumberSign([-2, 5, 15, -7, -8])); // ["-", "+", "+", "-", "-"]
