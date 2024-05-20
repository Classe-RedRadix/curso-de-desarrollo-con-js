// Crea una función que devuelva los números pares

function getEven(nums) {
  return nums.filter(num => num % 2 === 0);
}

getEven([1, 2, 3, 4, 5]); // [2, 4]