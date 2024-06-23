/*const closures00 = (n) => {
  return (m) => {
    return n+m;
  }
}

function myFunc(n) {
  return function (m) {
    return n+m;
  }
}

const mostSimple = (a) => (b) => a + b;

const suma = closures00(3)
console.log(suma(4)) //7
console.log(mostSimple(3)(4));*/

/*-------------------------------------*/

/*
const partial = (fn, ...args) => {
  return (...moreArgs) => {
    return fn(...args, ...moreArgs)
  }
}
*/

/*-------------------------------------*/

/*const memoize = (fn) => {
  let values;
  return (a) => {
    return 'Calculating... ' + fn(a)
  }
};

const double = (n) => n * 2;

const memoFn = memoize(double);

console.log(memoFn(2)); // Calculating... 4
console.log(memoFn(8)); // Calculating... 16
console.log(memoFn(2)); // 4*/

/*-------------------------------------*/

const fireMemoize = (fn, ...args) => {
  let cache = {} // {'[1, 2, 3, 4]': 10}
  return (...moreArgs) => {
    let values = [...args, ...moreArgs]
    if(!cache[JSON.parse(values)]) {
      cache[values] = fn(values)
    } else {
      console.log(cache[clave])
    }

  }
}

const sum = (a, b, c, d) => a + b + c + d;
const memoFn = fireMemoize(sum, 1);

console.log(memoFn(2, 3, 4)); // calculating... 10
console.log(memoFn(2)(3, 4)); // 10
console.log(memoFn(4)(3, 4)); // calculating... 12
console.log(memoFn(2)(3)(4)); // 10
console.log(memoFn(2, 3)(4)); // 10


/*-------------------------------------*/




















