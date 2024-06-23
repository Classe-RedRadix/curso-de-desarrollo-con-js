const sumElements = (list) => {
  return list
    .map(item => {
      let sum = 0;
      item.map(item => sum += item)
      return sum;
    })
};

  print.log(sumElements([[1,2], [34, 20, 5], [11], [2,4]]));