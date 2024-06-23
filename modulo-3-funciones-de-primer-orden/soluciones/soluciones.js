// Ejercicio funciones
function repeat(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

repeat(() => print.log("SPAM!"), 3);

// Ejercicio funciones II
function retry(func, attempts) {
  try {
    func();
  } catch (err) {
    if (attempts <= 1) throw err;
    retry(func, attempts - 1);
  }
}

retry(() => print.log("SPAM!"), 3);

// Ejercicio funciones III
function map(func, list) {
  const result = [];
  for (let item of list) {
    result.push(func(item));
  }
  return result;
}

print.log(map((x) => x + 1, [1, 2, 3]));

// Ejercicio funciones IV
function filter(func, list) {
  const result = [];
  for (let item of list) {
    if (func(item)) result.push(item);
  }
  return result;
}

print.log(filter((x) => x >= 2, [1, 2, 3]));

// Ejercicio funciones V
function reduce(func, initial, list) {
  let acc = initial;
  for (let item of list) {
    acc = func(acc, item);
  }
  return acc;
}

print.log(reduce((acc, x) => acc + x, 10, [1, 2, 3]));

// Ejercicio funciones VI
function map2(func, list) {
  return list.reduce((acc, x) => [...acc, func(x)], []);
}

print.log(map2((x) => x + 1, [1, 2, 3]));

// Ejercicio funciones VII
function filter2(func, list) {
  return list.reduce((acc, x) => (func(x) ? [...acc, x] : acc), []);
}

print.log(filter2((x) => x >= 2, [1, 2, 3]));

// Ejercicio funciones VIII
function negate(func) {
  return (...args) => !func(...args);
}

function isEven(number) {
  return number % 2 === 0;
}
const isNotEven = negate(isEven);
print.log([1, 2, 3, 4].filter(isNotEven));

// Ejercicio clausuras
function add(num1) {
  return (num2) => {
    return num1 + num2;
  };
}
const add2 = add(2);
print.log(add2(3));

// Ejercicio funciones IX
function memoize(func) {
  const cachedArgs = {};
  return (arg) => {
    if (!cachedArgs[arg]) cachedArgs[arg] = func(arg);
    return cachedArgs[arg];
  };
}

function duplicate(a) {
  print.log("Calculando...");
  return a * 2;
}

const memoizedDuplicate = memoize(duplicate);

print.log(memoizedDuplicate(2));
print.log(memoizedDuplicate(2));
print.log(memoizedDuplicate(3));

// Ejercicio funciones X
function memoize2(func) {
  const cachedArgs = {};
  return (...args) => {
    const argKey = JSON.stringify(args);
    if (!cachedArgs[argKey]) cachedArgs[argKey] = func(...args);
    return cachedArgs[argKey];
  };
}

function sum(a, b) {
  print.log("Calculando...");
  return a + b;
}

const memoizedSum = memoize2(sum);

print.log(memoizedSum(2, 2));
print.log(memoizedSum(2, 2));
print.log(memoizedSum(2, 3));

// Ejercicio funciones XI
function partial(func, firstParam) {
  return (...args) => {
    return func(firstParam, ...args);
  };
}

const sum = (a, b) => a + b;
const add1 = partial(sum, 1);
print.log(add1(3));
print.log(add1(4));
