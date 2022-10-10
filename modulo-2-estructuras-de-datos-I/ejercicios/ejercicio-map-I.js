// [8, 12, 20] -> [4, 6, 10]
// [1, 7, 50] -> ["1", "7", "50"]
// [-2, 5, 15, -7, -8] -> ["-", "+", "+", "-", "-"]

console.log([8, 12, 20].map(item => item / 2));
console.log([1, 7, 50].map(item => item.toString()));
console.log([-2, 5, 15, -7, -8].map(item => (item < 0 ? '-' : '+')));
