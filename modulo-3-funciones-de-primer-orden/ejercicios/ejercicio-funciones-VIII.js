function isEven(number) {
  return number % 2 === 0;
}

const negate = (fn) => {
  return (args) => !fn(args);
};

const isNotEven = negate(isEven);

const odd = [1, 2, 3, 4].filter(isNotEven);
console.log(odd); //[1,3]
