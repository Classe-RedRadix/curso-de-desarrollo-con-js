// Function that returns the total sum of multiple values inside different arrays

const arrayOfNumbers = [
  [2, 2],
  [3, 4],
  [1, 1, 1]
];

function getTotalSum(numbers) {
  return numbers.flat().reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(getTotalSum(arrayOfNumbers));
