/*----------------EJERCICIO FUNCIONES----------------*/

const repeat = (fn, n) => {
  for(let i = 0; i<n; i++) {
    fn()
  }
};

//repeat(() => console.log('spam'), 3)



/*----------------EJERCICIO FUNCIONES II----------------*/
const retry = (fn, n) => {
  try {
    fn()
  } catch (err) {
    if(n <= 1) throw err //cada vez n vale 1 menos, de modo que cuando sea la última vez envia el error
    retry(fn, n-1)
  }
}

//retry(() => console.log('spam'), 3)



/*----------------EJERCICIO FUNCIONES III----------------*/
const map = (fn, list) => {
  const result = [];
  for(let item of list) {
    result.push(fn(item))
  }
  return result;
}

//console.log(map(x => x + 1, [1, 2, 3]) )// [2, 3, 4]



/*----------------EJERCICIO FUNCIONES IV----------------*/
const filter = (fn, list) => {
  const result = [];
  for(item of list){
    if(fn(item)){
      result.push(item)
    }
  }
  return result;
}

//console.log(filter(x => x >= 2, [1, 2, 3])) // [2, 3]



/*----------------EJERCICIO FUNCIONES V----------------*/
const reduce = (fn, intialValue, list) => {
  let result = intialValue;
  for(let item of list) {
    result = fn(result, item)
  }
  return result;
}

//console.log(reduce((acc, x) => acc + x, 0, [1, 2, 3])) // 6
//console.log(reduce((acc, x) => acc + x, 10, [1, 2, 3])) // 16



/*----------------EJERCICIO FUNCIONES VI----------------*/
const mapWithoutLoops = (fn, list) => {
  return list.reduce((acc, x) => [...acc, fn(x)], []) //es el resultado de mapWithoutLoops -> en este caso tiene que ser un array de = longitud
}

//console.log(mapWithoutLoops((x) => x + 1, [1, 2, 3])); //[2, 3, 4]



/*----------------EJERCICIO FUNCIONES VII----------------*/
const filterWithoutLoops = (fn, list) => {
  return list.reduce((acc, x) => fn(x) ? [...acc, x] : acc, []) //es el resultado de mapWithoutLoops -> en este caso tiene que ser tiene que ser un array de <= longitud
}

//console.log(filterWithoutLoops((x) => x > 1, [1, 2, 3])); //[2, 3]



/*----------------EJERCICIO FUNCIONES VIII----------------*/
const negate = (fn) => {
  return (...args) => !fn(...args)
}



/*----------------EJERCICIO FUNCIONES XI----------------*/
const partial = (fn, ...args) => {
  return (...moreArgs) => {
    return fn(...args, ...moreArgs)
  }
}

const sum = (a, b) => a + b;
const add1 = partial(sum, 1);
//console.log(add1(3)); // 4
//console.log(add1(4)); // 5



/*----------------EJERCICIO FUNCIONES XI----------------*/
const memoize = (fn) => {
  let cache = {} //param: result {3: 4, 5: 6}
  return (a) => {
    if(!cache[a]) { // si no existe el valor cacheado de a, asigno a cache[a] el resultado de la función
      cache[a] = fn(a);
      console.log(`No memorized value: `)
    }
    return cache[a]
  }
}

const double = x => x*2;
const memoizeDouble = memoize(double)

console.log(memoizeDouble(2)) // No memoized value: 4
console.log(memoizeDouble(4)) // No memoized value: 8
console.log(memoizeDouble(2)) // 4

console.log(JSON.stringify([]))
