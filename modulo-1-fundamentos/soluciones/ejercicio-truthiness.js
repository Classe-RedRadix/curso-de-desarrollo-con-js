// "Abc" -> Truthy
// 20 -> Truthy
// "20" -> Truthy
// "0" -> Truthy
// 0 -> Falsy
// ""  -> Falsy
// "undefined" -> Truthy
// undefined -> Falsy
// null -> Falsy

function logTruthiness(value) {
  const truthiness = Boolean(value) ? "truthy" : "falsy";
  const type = typeof value;
  console.log(`Value "${value}" with type ${type} is ${truthiness}`);
}

logTruthiness("Abc"); // Value "Abc" with type string is truthy
logTruthiness(20); // Value "20" with type number is truthy
logTruthiness("20"); // Value "20" with type string is truthy
logTruthiness("0"); // Value "0" with type string is truthy
logTruthiness(0); // Value "0" with type number is falsy
logTruthiness(""); // Value "" with type string is falsy
logTruthiness(undefined); // Value "undefined" with type undefined is falsy
logTruthiness(null); // Value "null" with type object is falsy
