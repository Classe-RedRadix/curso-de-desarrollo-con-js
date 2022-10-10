// Hacerlo en clase

const arrayOfNumbers = [1, 2, 3, 4, 5, 8];

function printFirstAndLastElement(array) {
  const arrayLength = array.length;
  const lastArrayElement = arrayLength - 1;

  array.forEach((number, index) => {
    const isLastArrayElement = index === lastArrayElement;

    if (index === 0 || (isLastArrayElement && arrayLength !== 1))
      console.log(number);
  });
}

printFirstAndLastElement(arrayOfNumbers);
