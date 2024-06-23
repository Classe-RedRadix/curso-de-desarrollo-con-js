/*const repeat = (func, times) => {
  for(let i = 0; i < times; i++){
    func();
  }
}

const print = () => console.log('SPAM!');

repeat(print, 3);*/

/*
const retry = (func, times) => {
  try {
    func()
  } catch {
    for(let i = 0; i < times; i++){
      func();
    }
  }
}

const print2 = () => throw new Error();

retry(print2, 3)*/

/*const myMap = (fn, array) => {
  const result = [];
  for(const item of array){
    result.push(fn(item))
  }
  return result;
}
console.log(myMap(x => x+1, [1, 2, 3]));*/

/*
const myFilter = (fn, array) => {
  const result = [];
  for(const item of array){
    fn(item) && result.push(item)
  }
  return result;
}
console.log(myFilter(x => x>=2, [1, 2, 3]));*/

const myReduce = (fn, initalValue, array)=> {
  let result = initalValue;
  for(let i = 0; i < array.length; i++){
    result = fn(result, array[i], i, array);
  }
  return result;
}

/*console.log(myReduce((acc, x) => acc + x, 0, [1, 2, 3]));*/

/*const mySecondMap = (fn, array) => {
  myReduce(() => {}, undefined,  array)
}

console.log(mySecondMap(x => x+1, [1,2,3])); //[2,3,4]*/

/*const mySecondFilter = (fn, array) => {
  const result = [];
    myReduce((acc, x) => fn(x) && result.push(x), [], array);
  return result;
}

console.log(mySecondFilter(x => x >= 2, [1,2,3]));*/ //[2, 3]


const myNegate = (cb) => (...args) => !cb(...args);


const isEven = (n) => n % 2 === 0;
const isNotEven = myNegate(isEven);

console.log([1, 2, 3, 4].filter(isNotEven)); //[1, 3]















