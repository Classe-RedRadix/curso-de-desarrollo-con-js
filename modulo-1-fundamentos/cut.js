const cut = (array, firstIndex, lastIndex) => {
  const result = [];
  if (lastIndex === undefined) {
    lastIndex === Number(array.length)
  }
  for(let i = 0; i < array.length; i++){
    if(i >= firstIndex && i <= lastIndex) {
      result.push(array[i])
    }
  }
  print.log(result)
}

let arrayTest01 = ['a', 'b', 'c', 'd'];
let firstIndex01 = 1;
let lastIndex01 = 2;

let arrayTest02 = ['a', 'b', 'c', 'd'];
let firstIndex02 = 1;

cut(arrayTest01, firstIndex01, lastIndex01);
cut(arrayTest02, firstIndex02);