// [8, 12, 20] -> [4, 6, 10]
const dividedByTwo = [8, 12, 20].map((number) => number / 2);
console.log(dividedByTwo);

// [1, 7, 50] -> ["1", "7", "50"]
const stringifedNumbers = [1, 7, 50].map((number) => number.toString());
console.log(stringifedNumbers);

// [-2, 5, 15, -7, -8] -> ["-", "+", "+", "-", "-"]
const signValues = [-2, 5, 15, -7, -8].map((number) => {
  if (number.toString().includes("-")) {
    return "-";
  } else {
    return "+";
  }
});
console.log(signValues);
