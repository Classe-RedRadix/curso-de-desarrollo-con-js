const getOdd = list => list.filter(number => number % 2);
//console.log(getOdd([1,2,3,4]))


const getImportant = list => list.filter(obj => obj?.important);
//console.log(getImportant([{name: 'lorem', important: false}, {name: 'ipsum', important: true}]));

const getSum = list => list.reduce(((acc, act) => acc + act));
//console.log(getSum([1,2,3,4]))
//console.log(getSum(['h','e','l','l','o']))


const getEvenSum = list => list.reduce(((acc, act) => act > 0 ? act + acc : acc), 0);
//console.log(getEvenSum([-1,2,-3,4])); // => 6

const getMaximum = list => list.reduce(((max, actual) => actual > max ? actual : max ));
//console.log(getMaximum([-1, 2,-3, 4])) // => 4

const getDeepSum = (list) => list.reduce(((acc, actual) => acc.concat(getSum(actual))), []);
//console.log(getDeepSum([[1, 2], [34, 20, 5], [11], [2,4]])) // => [3, 59, 11, 6]


const listA = [1, 2, 3, 4];
const listB = [3, 4, 5, 6]; // => [3, 4]

const getDifference = (listA, listB) => {
  const setB = new Set(listB);

  const result = [];

  listA.forEach(element => {
    if(!setB.has(element)) {
      result.push(element)
    }
  })

  return result;
}
  console.log(getDifference(listA, listB))