// 1. Crea una función que devuelva los números pares

function getEven(nums) {
  const evens = [];
  for (const n of nums) {
    !(n % 2) && evens.push(n);
  }
  return evens;
}

console.info("1:", getEven([1, 2, 3, 4, 5])); // [2, 4]

// =========

// 2. Crea una función que devuelva la suma total

function sum(nums) {
  let sum = 0;
  for (const n of nums) sum += n;
  return sum;
}

console.info("2:", sum([1, 2, 3, 4, 5])); // 15

// =========

// 3. Crea una función que devuelva el número máximo
// No utilizes Math.Max ni similares

function max(nums) {
  let max = 0;
  for (const n of nums) {
    if (n > max) {
      max = n;
    }
  }
  return max;
}

console.info("3:", max([2, 4, 6, 8])); // 8

// =========

// 4. Recorre y suma todos los números de este array
let array = [
  [2, 2], // 4
  [3, 4], // 7
  [1, 1, 1], // 3
];

function sumAll(list) {
  let total = 0;
  for (const nums of list) total += sum(nums);
  return total;
}

console.info("4:", sumAll(array));

// =========

// 5. Crea una función que separe las palabras de una frase
function getWords(str, cond = () => true) {
  const words = [];
  let word = ""; //

  function push(word) {
    cond(word) && words.push(word);
  }

  for (const char of str) {
    if (char === " ") {
      push(word);
      word = "";
    } else {
      word = word.concat(char);
    }
  }
  push(word);
  return words;
}

console.info("5:", getWords("lorem ipsum dolor")); // ["lorem", "ipsum", "dolor"]

// =========

// 6. Crea una función que elimine todos los espacios de una frase
function removeSpaces(str) {
  let result = undefined;
  for (const char of str) {
    if (char !== " ") {
      result += char;
    }
  }
  return result;
}

console.info("6:", removeSpaces("lorem ipsum dolor")); // "loremipsumdolor"

// =========

// 7. Crea una función que extraiga los números de una string con el formato provisto
function extractNumbers(str) {
  function isNumber(chars) {
    return !isNaN(chars);
  }

  return getWords(str, isNumber).map(Number);
}

console.info("7:", extractNumbers("3 20 hola 6 1")); // [3, 20, 6, 1]

// =========

// 8. Crea una variable contado que empiece valiendo 0
// Incrementa el contador cada segundo e imprímelo

function setCounter() {
  const TIME = 3;
  let counter = 0;
  const id = setInterval(function () {
    console.info("> counter: ", ++counter);

    if (counter === TIME) clearInterval(id);
  }, 1000);
}

console.info("8:");
setCounter();

// =========

// 9. Escribe una función que reciba un número positivo N
// La función debe imprimir una pirámide de simbolos #
// Con N niveles

// Ejemplos

console.info("9:");
pyramid(1);
// "#"
console.info("==========");

pyramid(2);
// " # "
// "###"
console.info("==========");

pyramid(3);
// "  #  "
// " ### "
// "#####"
console.info("==========");

function pyramid(n) {
  const lineLength = n + (n - 1);
  const shape = [];

  function newList(length, data) {
    // 5, '#'
    return Array.from({ length }, () => data); // ['#','#','#','#','#']
  }

  // Build pyramid
  for (let i = n; i; i--) {
    const endsLen = n - i; // 0
    const bodyLen = lineLength - endsLen * 2; // 5 - (0 * 2) = 5

    const sides = newList(endsLen, " ");
    const body = newList(bodyLen, "#");

    shape.push([...sides, ...body, ...sides].join(""));
  }

  shape.reverse();

  // Draw pyramid
  for (const line of shape) {
    console.info(line);
  }
}

// =========

// 10. Escribe una función que dados un array y una longitud `size`
// divida la lista en múltiples subarrays de longitud `size`

// Ejemplos
// chunk([1, 2, 3, 4], 2); === [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  let chunk = [];

  for (const item of array) {
    chunk.push(item);

    if (chunk.length === size) {
      result.push(chunk);
      chunk = [];
    }
  }
  chunk.length && result.push(chunk);

  return result;
}

console.info("10:");
console.info(chunk([1, 2, 3, 4], 2)); // [[ 1, 2], [3, 4]]
console.info(chunk([1, 2, 3, 4, 5], 2)); // [[ 1, 2], [3, 4], [5]]
console.info(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.info(chunk([1, 2, 3, 4, 5], 4)); // [[ 1, 2, 3, 4], [5]]
console.info(chunk([1, 2, 3, 4, 5], 10)); // [[ 1, 2, 3, 4, 5]]

// =========
