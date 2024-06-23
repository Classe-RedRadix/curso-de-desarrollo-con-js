/*----------------EJERCICIO OBJETOS I----------------*/
const mapKeys = (obj, fn) => {
  const keys = Object.keys(obj); //[a, b, c]
  const values = Object.values(obj); // [1, 2, 3]

  const upperCaseKeys = keys
    .map(key => fn(key)); //[A, B, C]

  return upperCaseKeys
    .map((key, index) => ({
      [key]: values[index]
    })) //repetir con forEach pq un map devuelve un array con el mismo número de elementos
}

const obj1 = { a: 1, b: 2, c: 3}
const result1 = mapKeys(obj1, key => key.toUpperCase())

//console.log(result1);

/*----------------EJERCICIO OBJETOS II----------------*/
const mapValues = (obj, fn) => {
  const keys = Object.keys(obj); //[a, b, c]
  const values = Object.values(obj); // [1, 2, 3]

  return keys
    .map((key, index) => ({
      [key]: fn(values[index])
    })) //repetir con forEach pq un map devuelve un array con el mismo número de elementos
}

const obj2 = { a: 1, b: 2, c: 3}
const result2 = mapValues(obj2, x => x * 2)

//console.log(result2);

/*----------------EJERCICIO OBJETOS IV----------------*/
const clone = (obj) => Object.assign({}, obj);

//console.log(clone({b: 2}));
//console.log(clone({b: 2}) === {b: 2});

/*----------------EJERCICIO OBJETOS V----------------*/
/*const sumDeep = (obj) => {
  let result = [];
  const keys = Object.keys(obj)
  for (let key of keys) {
    if(typeof obj[key] !== 'number') {
      oneFire(obj[key])
    } else {
      result = [...result, ...obj[key]]
    }
  }

  return result.reduce((acc, x) => acc + x, 0)
  /!*const a = Object.assign(obj)
  console.log(a);*!/
}*/

/*const oneFire = (obj) => {
  let result = [];
  const keys = Object.keys(obj)
  for(let i = 0; i< keys.length; i++) {
    if(typeof obj[key] !== 'number') {
      Object.assign(obj[i-1], obj[i])
      oneFire(obj[key])
    } else {
      result = [...result, ...obj[key]]
    }
  }

  return result.reduce((acc, x) => acc + x, 0)
  /!*const a = Object.assign(obj)
  console.log(a);*!/
}

for(let i = 0; i< keys.length; i++)*/

const data = {
  a: 1, 
  b: {
    c: 2, 
    d: 5, 
    e: {
      f: 9, 
      g: 6
    }
  }
} //23

/*oneFire(data);*/

const cloneDeep = () => {

}


const source = {
  a: { lorem: "ipsum" },
  b: [1, 2, { Homer: "Simpson" }],
  c: 25,
};
const copy = cloneDeep(source);
console.log(copy); // debe ser igual
copy.a.lorem = "change";
copy.b[2].Homer = "change";
console.log(source); // no debe haber cambiado
