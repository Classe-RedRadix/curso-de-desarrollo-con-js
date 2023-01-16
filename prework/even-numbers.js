// Crea una función que devuelva los números pares

function getEven(nums) {
    return nums.filter(number => number%2 === 0);
}
  
const test1input = [1, 2, 3, 4, 5], test1output = [2, 4];
const test2input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const test2output = [2, 4, 6, 8, 10, 12, 14];

console.log(`${test1input} gives ${getEven(test1input)} == ${test1output}???`); 
console.log(`${test2input} gives ${getEven(test2input)} == ${test2output}???`); 

