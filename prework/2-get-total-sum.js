// Function that returns the total of a sum from numbers in an array

function sum(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum([1, 2, 3, 4, 5]));
