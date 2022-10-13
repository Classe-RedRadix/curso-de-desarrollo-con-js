function sum(a) {
  console.log("Calculando...");
  return 2 + a;
}

const memoize = (fn) => {
  const cache = {};
  return (arg) => {
    if (!cache[arg]) cache[arg] = fn(arg);
    return cache[arg];
  };
};

const memoizedSum = memoize(sum);
console.log(memoizedSum(2)); // Calculando... 4
console.log(memoizedSum(2)); // 4
console.log(memoizedSum(3)); // Calculando... 5

function product(a, b) {
  console.log("Calculando...");
  return a * b;
}

const memoizeArgs = (fn) => {
  const cacheArgs = {};
  return (...args) => {
    const p = JSON.stringify(args);
    if (!cacheArgs[p]) cacheArgs[p] = fn(...args);
    return cacheArgs[p];
  };
};

const memoizedProduct = memoizeArgs(product);
console.log(memoizedProduct(2, 2)); // Calculando... 4
console.log(memoizedProduct(2, 2)); // 4
console.log(memoizedProduct(3, 2)); // Calculando... 6
