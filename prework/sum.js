// Crea una función que devuelva la suma total

function sum(nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

sum([1, 2, 3, 4, 5]); // 15