const createArrayOperator = (fn) => {
  return (arr) => arr.map(fn);
};

const multiplyArr = createArrayOperator((item) => item * 2);
const increment = createArrayOperator((item) => item + 1);

console.log(multiplyArr([1, 2, 3])); //2,4,6
console.log(increment([1, 2, 3])); //2,3,4
