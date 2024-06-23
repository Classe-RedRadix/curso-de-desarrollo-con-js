/*-----------------------BIND---------------------*/
/*function bind (context, func) {
  return function () {
    func.call(context)
  }
}

const obj = {
  name: 'Paco',
  greet: function(guest) {
    console.log(`Hello, ${guest}! My name's ${this.name}`)
  }
}

//const greet = obj.greet;
//greet('Molpe')

bind(obj, obj.greet('Molpe'))*/

/*-----------------------GETTERS SETTERS---------------------*/

/*const obj = [10, 2, 30, 4] // {1: 10, 2: 30, 3: 4} _> {1: 10, 2: 30, 3: 4, average: 12 }

Object.defineProperty(obj, 'average', {
  get: function () {
    return this.list.reduce((acc, x) => acc + x, 0) / this.length
  },
  get: function () {
    return 
  }
})*/

const array = [];
const obj = {};

Object.defineProperty(obj, 'value', {
  set: (value) => array.push(value),
  get: () => array[array.length-1]
})

obj.value = 2
obj.value = 5

console.log('array ->', array);
console.log(obj.value);