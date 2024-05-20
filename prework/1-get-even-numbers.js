// Function that returns another array only with even numbers from a given array

function getEven(nums) {
  const numsEven = nums.filter((num) => num % 2 === 0);
  return numsEven;
}

console.log(getEven([1, 2, 3, 4, 5, 18, 12, 22, 53, 88, 75, 13]));
