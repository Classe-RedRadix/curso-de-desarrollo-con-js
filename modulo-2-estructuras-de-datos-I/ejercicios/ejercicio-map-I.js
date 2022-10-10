// [8, 12, 20] -> [4, 6, 10]
const mapSum = (arr) => arr.map( element => element/2)
console.log(mapSum([8, 12, 20]))

// [1, 7, 50] -> ["1", "7", "50"]
const mapString = (arr) => arr.map( element => element.toString())
console.log(mapString([1, 7, 50]))

// [-2, 5, 15, -7, -8] -> ["-", "+", "+", "-", "-"]
const stractSingal = (arr) => arr.map( element => element >= 0 ? '+' : '-')
console.log(stractSingal([-2, 5, 15, -7, -8]))