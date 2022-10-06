// Crea aquí tu función flattenDeep
const flattenDeep = (parameter) => {
  if (!Array.isArray(parameter)) {
    return parameter;
  } else {
    let array = [];
    for (let item of parameter) {
      array = array.concat(flattenDeep(item));
    }
    return array;
  }
};

console.log(flattenDeep([1, [2, 3], [[4, 5], 6], [[[8]]]]));

//flattenDeep([[4, 5], 6]) llega al else
//for(let item of parameter) item=[4,5] y result1=[]
//se mete en flattenDeep([4,5]) y pasa por else
//for(let item of parameter) item=4 y result2=[]
//se mete en flattenDeep(4) y llega al if --> devuelve 4
//result2=[4] y en el for(let item of parameter) item=5
//se mete en flattenDeep(5) y llega al if --> devuelve 5
//result2=[4,5]
//VUELVE AL PRIMER for(let item of parameter) result1.concat(result2) y ahora el item=6
//se mete en flattenDeep(6) y llega al if -->devuelve 6
// entonces hace result1.concat(6)
//devuelve result1 = [4,5,6]
