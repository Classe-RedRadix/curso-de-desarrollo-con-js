// Function that extracts numbers from a given string

function extractNumbers(phrase) {
  const arrayNumbers = phrase.split(" ").map(Number);
  return arrayNumbers;
}

console.log(extractNumbers("3 20 6 1"));
