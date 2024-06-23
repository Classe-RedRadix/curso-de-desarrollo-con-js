const firstAndLast = (array) => {
  let result = [];

  if(array.length) {
    if(array.length === 1) {
      result.push(array[0])
    } else {
      for(let i= 0; i < array.length; i++) {
        if(i === 0) {
          result.push(array[i])
        }
        if(i === array.length-1) {
          result.push(array[array.length-1])
        }
      }
    }
    print.log(result);
  } else print.log([])

}
let arrayTest01 = [1, 2, 3, 45, 6];
let arrayTest02 = [1];
let arrayTest03 = [];

firstAndLast(arrayTest01);
firstAndLast(arrayTest02);
firstAndLast(arrayTest03);