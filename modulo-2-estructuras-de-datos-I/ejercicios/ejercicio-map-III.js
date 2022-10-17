const array = [[1, 2], [34, 20, 5], [11], [2, 4]];
console.log(
  array.map(subArray => {
    let subArraySum = 0;

    subArray.forEach(number => {
      subArraySum += number;
    });

    return subArraySum;
  }),
);

// [[1, 2], [34, 20, 5], [11], [2, 4]] -> [3, 59, 11, 6]
