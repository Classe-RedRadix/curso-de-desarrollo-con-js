// Crea una función que devuelva el número máximo
// No utilizes Math.Max ni similares

function max(nums) {
  return nums.reduce((act, maximo) => act > maximo ? act : maximo, 0);
}

console.log(max([2, 4, 6, 8])); // 8