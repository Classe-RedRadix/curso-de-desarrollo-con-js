const map1 = [8, 12, 20].map(item => item / 2);
console.log(map1);
// [8, 12, 20] -> [4, 6, 10]

const map2 = [1, 7, 50].map(item => String(item));
console.log(map2);
// [1, 7, 50] -> ["1", "7", "50"]

const map3 = [-2, 5, 15, -7, -8].map(item => (item >= 0 ? '+' : '-'));
console.log(map3);
// [-2, 5, 15, -7, -8] -> ["-", "+", "+", "-", "-"]
