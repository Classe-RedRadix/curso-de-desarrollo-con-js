const printItems = (array) => {
  if (!array.length) return;

  if (array.length === 1) {
    console.log(array[0]);
    return;
  }

  console.log(array[0], array[array.length - 1]);
};

printItems([]);
printItems([1]);
printItems([1, 2, 3]);
printItems([1, 2]);
