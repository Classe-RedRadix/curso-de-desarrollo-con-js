// Implementa la función memoize para funciones de un sólo parámetro.
function multiplyByTwo(num) {
  console.log("Calculando...");
  return num * 2;
}

function memoize(fn) {
  let cache = {};
  return arg => {
    const key = arg.toString();
    const notPresentInCache = !cache[key];

    if (notPresentInCache) return (cache[key] = fn(arg));
    return cache[key];
  };
}

const memoizeCall = memoize(multiplyByTwo);
console.log(memoizeCall(5)); // ...Calculando
console.log(memoizeCall(5)); // ✅
console.log(memoizeCall(2)); // ...Calculando
console.log(memoizeCall(2)); // ✅

// Implementa la función memoize para funciones de cualquier número de parámetros.
function memoizeAll(fn) {
  const cache = {};

  return (...values) => {
    values.forEach(value => {
      const key = value.toString();
      const notPresentInCache = !cache[key];
      if (notPresentInCache) return (cache[key] = fn(value));
      return cache[key];
    });
  };
}

const memoizeAllCall = memoizeAll(multiplyByTwo);
console.log(memoizeAllCall(2, 3, 4)); // ...Calculando x3
console.log(memoizeAllCall(2, 3, 4)); // ✅
console.log(memoizeAllCall(5, 4, 5)); // ...Calculando x1
