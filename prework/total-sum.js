// Crea una función que devuelva la suma total

function sum(nums) {
    return nums.reduce((sum, value) => sum + value, 0);
}

const test1input = [1, 2, 3, 4, 5], test1output = 15;
const test2input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const test2output = 120;

console.log(`${test1input} gives ${sum(test1input)} == ${test1output}???`); 
console.log(`${test2input} gives ${sum(test2input)} == ${test2output}???`); 