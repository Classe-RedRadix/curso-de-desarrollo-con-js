// Crea una función que devuelva el número máximo
// No utilizes Math.Max ni similares

function max(nums) {
  return nums.reduce((acc, cur) => cur > acc ? cur : acc, 0)
}

max([2, 4, 6, 8]); // 8